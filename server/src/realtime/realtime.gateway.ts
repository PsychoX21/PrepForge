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

@WebSocketGateway({
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:4000',
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

  // Track online users: userId -> { socketId, currentFocus, groupId }
  private onlineUsers = new Map<
    string,
    { socketId: string; currentFocus: string | null; groupId: string | null }
  >();

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
      this.onlineUsers.set(user.id, {
        socketId: client.id,
        currentFocus: null,
        groupId: null,
      });

      this.logger.log(`User connected: ${user.displayName} (${client.id})`);
    } catch {
      client.disconnect();
    }
  }

  handleDisconnect(client: UserSocket) {
    if (client.userId) {
      const userData = this.onlineUsers.get(client.userId);
      if (userData?.groupId) {
        this.server.to(`group:${userData.groupId}`).emit('user:offline', {
          userId: client.userId,
        });
      }
      this.onlineUsers.delete(client.userId);
      this.logger.log(`User disconnected: ${client.userId}`);
    }
  }

  // ─── Group Management ─────────────────────────────────────────────────

  @SubscribeMessage('join:group')
  handleJoinGroup(
    @ConnectedSocket() client: UserSocket,
    @MessageBody() data: { groupId: string },
  ) {
    client.groupId = data.groupId;
    client.join(`group:${data.groupId}`);

    // Update online users map
    if (client.userId) {
      const userData = this.onlineUsers.get(client.userId);
      if (userData) {
        userData.groupId = data.groupId;
      }
    }

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

    for (const [userId, data] of this.onlineUsers.entries()) {
      if (data.groupId === groupId) {
        online.push({ userId, currentFocus: data.currentFocus });
      }
    }

    this.server.to(`group:${groupId}`).emit('presence:list', online);
  }
}
