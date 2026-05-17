/**
 * WebSocket gateway for real-time features.
 * Handles presence, chat, and live progress broadcasting.
 */
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { PrismaService } from '../prisma/prisma.service';
import { FirebaseAdminService } from '../auth/firebase-admin.service';

interface UserSocket extends Socket {
  userId?: string;
  groupId?: string;
}

const corsOriginEnv = process.env.CORS_ORIGIN || 'http://localhost:4000';
const corsOrigins = corsOriginEnv.split(',').map((o) => o.trim().replace(/\/$/, ''));

@WebSocketGateway({
  cors: {
    origin: corsOrigins,
    credentials: true,
  },
  namespace: '/',
})
export class RealtimeGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(RealtimeGateway.name);

  // Track online users: userId -> { sockets, currentFocus, groupId }
  private onlineUsers = new Map<
    string,
    { sockets: Set<string>; currentFocus: string | null; groupId: string | null }
  >();

  // Track group members: groupId -> Set<userId> (O(Group Size) optimization)
  private groupMembers = new Map<string, Set<string>>();

  // Cooldown tracker for chat messaging rate-limiting (max 1 message/sec)
  private lastMessageTime = new Map<string, number>();

  constructor(
    private readonly prisma: PrismaService,
    private readonly firebaseAdmin: FirebaseAdminService,
  ) {}

  // ─── Connection Lifecycle ───────────────────────────────────────────────

  async handleConnection(client: UserSocket) {
    try {
      const token = client.handshake.auth?.token;
      if (!token) {
        client.disconnect();
        return;
      }

      const decoded = await this.firebaseAdmin.verifyToken(token);
      const user = await this.prisma.user.findUnique({
        where: { firebaseUid: decoded.uid },
      });

      if (!user) {
        client.disconnect();
        return;
      }

      client.userId = user.id;
      
      const existing = this.onlineUsers.get(user.id);
      if (existing) {
        existing.sockets.add(client.id);
      } else {
        this.onlineUsers.set(user.id, {
          sockets: new Set([client.id]),
          currentFocus: null,
          groupId: null,
        });
      }

      this.logger.log(`User connected: ${user.displayName} (${client.id})`);
    } catch {
      client.disconnect();
    }
  }

  handleDisconnect(client: UserSocket) {
    if (client.userId) {
      const userData = this.onlineUsers.get(client.userId);
      if (userData) {
        userData.sockets.delete(client.id);
        
        // Only completely disconnect when the LAST open tab is closed
        if (userData.sockets.size === 0) {
          if (userData.groupId) {
            const members = this.groupMembers.get(userData.groupId);
            if (members) {
              members.delete(client.userId);
              if (members.size === 0) {
                this.groupMembers.delete(userData.groupId);
              }
            }
            this.server.to(`group:${userData.groupId}`).emit('user:offline', {
              userId: client.userId,
            });
          }
          this.onlineUsers.delete(client.userId);
        }
      }
      this.logger.log(`User disconnected: ${client.userId} (${client.id})`);
    }
  }

  // ─── Group Management ─────────────────────────────────────────────────

  @SubscribeMessage('join:group')
  async handleJoinGroup(
    @ConnectedSocket() client: UserSocket,
    @MessageBody() data: { groupId: string },
  ) {
    if (!client.userId) {
      client.emit('error', { message: 'Unauthorized connection' });
      return;
    }

    const isMember = await this.prisma.groupMember.findUnique({
      where: {
        userId_groupId: {
          userId: client.userId,
          groupId: data.groupId,
        },
      },
    });

    if (!isMember) {
      this.logger.warn(
        `Unauthorized join attempt: User ${client.userId} tried to join group ${data.groupId}`,
      );
      client.emit('error', { message: 'Not a member of this group' });
      return;
    }

    client.groupId = data.groupId;
    client.join(`group:${data.groupId}`);

    // Update online users map
    const userData = this.onlineUsers.get(client.userId);
    if (userData) {
      userData.groupId = data.groupId;
    }

    // Add user to the group presence set
    let members = this.groupMembers.get(data.groupId);
    if (!members) {
      members = new Set();
      this.groupMembers.set(data.groupId, members);
    }
    members.add(client.userId);

    // Broadcast presence
    this.broadcastPresence(data.groupId);
  }

  // ─── Presence / War Room ──────────────────────────────────────────────

  @SubscribeMessage('presence:focus')
  handleFocusUpdate(
    @ConnectedSocket() client: UserSocket,
    @MessageBody() data: { currentFocus: string },
  ) {
    if (!client.userId) return;

    const userData = this.onlineUsers.get(client.userId);
    if (userData) {
      userData.currentFocus = data.currentFocus;
    }

    if (client.groupId) {
      this.server.to(`group:${client.groupId}`).emit('presence:update', {
        userId: client.userId,
        currentFocus: data.currentFocus,
      });
    }
  }

  // ─── Chat ─────────────────────────────────────────────────────────────

  @SubscribeMessage('chat:message')
  async handleChatMessage(
    @ConnectedSocket() client: UserSocket,
    @MessageBody()
    data: { content: string; groupId: string; threadId?: string },
  ) {
    if (!client.userId) return;

    // Chat Message Cooldown Rate Limiting (max 1 message per second)
    const now = Date.now();
    const lastTime = this.lastMessageTime.get(client.userId) || 0;
    if (now - lastTime < 1000) {
      client.emit('error', { message: 'Too many messages. Cooldown is active.' });
      return;
    }
    this.lastMessageTime.set(client.userId, now);

    if (!data.content?.trim() || data.content.length > 2000) return;

    if (data.groupId !== client.groupId) {
      this.logger.warn(`User ${client.userId} tried to send chat to unauthorized room: ${data.groupId}`);
      return;
    }

    const message = await this.prisma.chatMessage.create({
      data: {
        content: data.content,
        userId: client.userId,
        groupId: data.groupId,
        threadId: data.threadId || null,
      },
      include: {
        user: {
          select: { id: true, displayName: true, photoUrl: true },
        },
      },
    });

    this.server.to(`group:${data.groupId}`).emit('chat:message', message);
  }

  // ─── Progress Broadcasting ────────────────────────────────────────────

  @SubscribeMessage('progress:update')
  handleProgressUpdate(
    @ConnectedSocket() client: UserSocket,
    @MessageBody()
    data: { itemId: string; status: string; itemName: string },
  ) {
    if (!client.userId || !client.groupId) return;

    this.server.to(`group:${client.groupId}`).emit('progress:update', {
      userId: client.userId,
      ...data,
    });
  }

  // ─── Helpers ──────────────────────────────────────────────────────────

  private async broadcastPresence(groupId: string) {
    const online: Array<{
      userId: string;
      currentFocus: string | null;
    }> = [];

    const members = this.groupMembers.get(groupId);
    if (members) {
      for (const userId of members) {
        const data = this.onlineUsers.get(userId);
        if (data) {
          online.push({ userId, currentFocus: data.currentFocus });
        }
      }
    }

    this.server.to(`group:${groupId}`).emit('presence:list', online);
  }
}
