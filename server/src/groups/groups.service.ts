import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { nanoid } from 'nanoid';

import { SeedService } from '../seed/seed.service';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class GroupsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly seedService: SeedService,
    private readonly redis: RedisService,
  ) {}

  async create(userId: string, dto: CreateGroupDto) {
    const inviteCode = nanoid(8);

    const group = await this.prisma.group.create({
      data: {
        name: dto.name,
        description: dto.description,
        inviteCode,
        createdById: userId,
        members: {
          create: {
            userId,
            role: 'OWNER',
          },
        },
      },
      include: {
        members: { include: { user: { select: { id: true, displayName: true, photoUrl: true } } } },
      },
    });

    if (dto.useDefaultContent) {
      await this.seedService.seedDefaultContent(group.id);
    }

    return group;
  }

  async findAllForUser(userId: string) {
    return this.prisma.group.findMany({
      where: {
        members: { some: { userId } },
      },
      include: {
        _count: { select: { members: true, tracks: true } },
        members: {
          where: { userId },
          select: { role: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(groupId: string, userId: string) {
    const group = await this.prisma.group.findUnique({
      where: { id: groupId },
      include: {
        members: {
          include: {
            user: {
              select: {
                id: true,
                displayName: true,
                photoUrl: true,
                xp: true,
                level: true,
                streak: true,
              },
            },
          },
        },
        tracks: {
          include: {
            categories: {
              include: { _count: { select: { resources: true } } },
            },
          },
          orderBy: { order: 'asc' },
        },
        _count: { select: { members: true } },
      },
    });

    if (!group) throw new NotFoundException('Group not found');

    // Verify membership
    const isMember = group.members.some((m) => m.userId === userId);
    if (!isMember) throw new ForbiddenException('Not a member of this group');

    return group;
  }

  async joinByInvite(inviteCode: string, userId: string) {
    const group = await this.prisma.group.findUnique({
      where: { inviteCode },
    });

    if (!group) throw new NotFoundException('Invalid invite code');

    if (group.inviteExpiry && new Date() > group.inviteExpiry) {
      throw new ForbiddenException('Invite code has expired');
    }

    // Check if already a member
    const existing = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId: group.id } },
    });

    if (existing) throw new ConflictException('Already a member');

    await this.prisma.groupMember.create({
      data: {
        userId,
        groupId: group.id,
        role: 'MEMBER',
      },
    });

    await this.redis.del(`group:${group.id}:leaderboard`);

    return { message: 'Joined successfully', groupId: group.id };
  }

  async generateInvite(groupId: string, userId: string) {
    const member = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId } },
    });

    if (!member || !['OWNER', 'ADMIN'].includes(member.role)) {
      throw new ForbiddenException('Only admins can generate invites');
    }

    const inviteCode = nanoid(8);
    const inviteExpiry = new Date();
    inviteExpiry.setDate(inviteExpiry.getDate() + 7); // 7-day expiry

    await this.prisma.group.update({
      where: { id: groupId },
      data: { inviteCode, inviteExpiry },
    });

    return { inviteCode, expiresAt: inviteExpiry };
  }

  async getLeaderboard(groupId: string, userId: string) {
    if (!groupId || groupId === 'null' || groupId === 'undefined') {
      return [];
    }

    // Verify user is a member of the group
    const isMember = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId } },
    });
    if (!isMember) {
      throw new ForbiddenException('Not a member of this group');
    }

    const cacheKey = `group:${groupId}:leaderboard`;
    const cached = await this.redis.get<any[]>(cacheKey);
    if (cached) return cached;

    const members = await this.prisma.groupMember.findMany({
      where: { groupId },
      include: {
        user: {
          select: {
            id: true,
            displayName: true,
            photoUrl: true,
            xp: true,
            level: true,
            streak: true,
            lastActiveDate: true,
          },
        },
      },
      orderBy: {
        user: {
          xp: 'desc',
        },
      },
      take: 100,
    });

    const sorted = members
      .filter((m) => m.user !== null)
      .map((m, index) => ({
        rank: index + 1,
        user: m.user,
        xp: m.user.xp,
        streak: m.user.streak,
      }));

    await this.redis.set(cacheKey, sorted, 60); // 60 seconds cache
    return sorted;
  }

  async updateGroup(groupId: string, userId: string, dto: { name?: string; description?: string }) {
    const member = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId } },
    });

    if (!member) {
      throw new NotFoundException('Group not found or you are not a member');
    }

    if (!['OWNER', 'ADMIN'].includes(member.role)) {
      throw new ForbiddenException('Only admins or owners can modify settings');
    }

    return this.prisma.group.update({
      where: { id: groupId },
      data: dto,
    });
  }

  async deleteGroup(groupId: string, userId: string) {
    const member = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId } },
    });

    if (!member) {
      throw new NotFoundException('Group not found or you are not a member');
    }

    if (member.role !== 'OWNER') {
      throw new ForbiddenException('Only the group owner can delete this group');
    }

    // Perform delete. Prisma cascades clean up all memberships, tracks, chat, etc.
    await this.prisma.group.delete({
      where: { id: groupId },
    });

    return { success: true, message: 'Group deleted successfully' };
  }

  async exportGroup(groupId: string, userId: string) {
    // Verify membership
    const member = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId } },
    });
    if (!member) {
      throw new ForbiddenException('Not a member of this group');
    }

    // Fetch the full recursive hierarchy
    const tracks = await this.prisma.track.findMany({
      where: { groupId },
      orderBy: { order: 'asc' },
      include: {
        categories: {
          orderBy: { order: 'asc' },
          include: {
            resources: {
              orderBy: { order: 'asc' },
              include: {
                units: {
                  orderBy: { order: 'asc' },
                  include: {
                    subUnits: {
                      orderBy: { order: 'asc' },
                      include: {
                        items: {
                          orderBy: { order: 'asc' }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });

    // Strip database IDs, keys, timestamps, etc.
    const seedTracks = tracks.map(track => ({
      name: track.name,
      description: track.description || '',
      icon: track.icon || '',
      color: track.color || '',
      order: track.order,
      categories: track.categories.map(cat => ({
        name: cat.name,
        order: cat.order,
        description: cat.description || undefined,
        icon: cat.icon || undefined,
        resources: cat.resources.map(res => ({
          name: res.name,
          type: res.type,
          order: res.order,
          description: res.description || undefined,
          url: res.url || undefined,
          isMustDo: res.isMustDo,
          units: res.units.map(unit => ({
            name: unit.name,
            order: unit.order,
            description: unit.description || undefined,
            subUnits: unit.subUnits.map(subUnit => ({
              name: subUnit.name,
              order: subUnit.order,
              description: subUnit.description || undefined,
              items: subUnit.items.map(item => ({
                name: item.name,
                type: item.type,
                order: item.order,
                description: item.description || undefined,
                url: item.url || undefined,
                difficulty: item.difficulty || undefined
              }))
            }))
          }))
        }))
      }))
    }));

    return seedTracks;
  }
}
