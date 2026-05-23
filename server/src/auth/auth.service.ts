import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { FirebaseAdminService } from './firebase-admin.service';
import { PrismaService } from '../prisma/prisma.service';
import { GamificationService } from '../gamification/gamification.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly firebaseAdmin: FirebaseAdminService,
    private readonly prisma: PrismaService,
    private readonly gamification: GamificationService,
  ) {}

  /**
   * Verify an ID token and sync/create the user in our database.
   */
  async verifyAndSyncUser(idToken: string, localDate?: string) {
    if (idToken === 'demo-token') {
      let user = await this.prisma.user.findUnique({
        where: { firebaseUid: 'demo-uid' },
        include: {
          memberships: {
            include: {
              group: {
                include: {
                  _count: { select: { members: true, tracks: true } },
                },
              },
            },
          },
        },
      });

      if (!user) {
        let systemUser = await this.prisma.user.findFirst({
          where: { email: 'system@prepforge.app' },
        });
        if (!systemUser) {
          systemUser = await this.prisma.user.create({
            data: {
              firebaseUid: 'system_admin_uid',
              email: 'system@prepforge.app',
              displayName: 'System Admin',
            },
          });
        }

        let defaultGroup = await this.prisma.group.findFirst({
          where: { isDefault: true },
        });
        if (!defaultGroup) {
          defaultGroup = await this.prisma.group.create({
            data: {
              name: 'PrepForge Default',
              description: 'Default group with all curated content',
              inviteCode: 'DEFAULT_GROUP',
              isDefault: true,
              createdById: systemUser.id,
            },
          });
        }

        user = await this.prisma.user.create({
          data: {
            firebaseUid: 'demo-uid',
            email: 'demo@prepforge.com',
            displayName: 'Demo Candidate',
            xp: 140,
            level: 3,
            streak: 5,
            memberships: {
              create: {
                groupId: defaultGroup.id,
                role: 'MEMBER',
              },
            },
          },
          include: {
            memberships: {
              include: {
                group: {
                  include: {
                    _count: { select: { members: true, tracks: true } },
                  },
                },
              },
            },
          },
        });
      }

      return user;
    }

    try {
      const decoded = await this.firebaseAdmin.verifyToken(idToken);

      // Look up by firebaseUid first
      let user = await this.prisma.user.findUnique({
        where: { firebaseUid: decoded.uid },
      });

      // If not found by firebaseUid, check by email
      if (!user && decoded.email) {
        user = await this.prisma.user.findFirst({
          where: { email: decoded.email },
        });
      }

      if (user) {
        // Update existing user with latest details and link UID
        user = await this.prisma.user.update({
          where: { id: user.id },
          data: {
            firebaseUid: decoded.uid,
            email: decoded.email || undefined,
            displayName: decoded.name || undefined,
            photoUrl: decoded.picture || undefined,
          },
        });
      } else {
        // Create new user
        user = await this.prisma.user.create({
          data: {
            firebaseUid: decoded.uid,
            email: decoded.email || '',
            displayName:
              decoded.name || decoded.email?.split('@')[0] || 'User',
            photoUrl: decoded.picture || null,
          },
        });

        // Automatically enroll in default group
        let defaultGroup = await this.prisma.group.findFirst({
          where: { isDefault: true },
        });
        if (!defaultGroup) {
          let systemUser = await this.prisma.user.findFirst({
            where: { email: 'system@prepforge.app' },
          });
          if (!systemUser) {
            systemUser = await this.prisma.user.create({
              data: {
                firebaseUid: 'system_admin_uid',
                email: 'system@prepforge.app',
                displayName: 'System Admin',
              },
            });
          }
          defaultGroup = await this.prisma.group.create({
            data: {
              name: 'PrepForge Default',
              description: 'Default group with all curated content',
              inviteCode: 'DEFAULT_GROUP',
              isDefault: true,
              createdById: systemUser.id,
            },
          });
        }
        if (defaultGroup) {
          await this.prisma.groupMember.create({
            data: {
              userId: user.id,
              groupId: defaultGroup.id,
              role: 'MEMBER',
            },
          });
          this.logger.log(`Automatically enrolled ${user.email} in default group ${defaultGroup.name}`);
        }
      }

      // Update login streak and award daily XP
      await this.gamification.processLogin(user.id, localDate);

      // Return user profile excluding firebaseUid, populating memberships
      return this.prisma.user.findUnique({
        where: { id: user.id },
        select: {
          id: true,
          email: true,
          displayName: true,
          photoUrl: true,
          xp: true,
          level: true,
          streak: true,
          longestStreak: true,
          lastActiveDate: true,
          createdAt: true,
          memberships: {
            include: { group: { select: { id: true, name: true } } },
          },
        },
      });
    } catch (err) {
      this.logger.error(`Failed to verify and sync user: ${(err as Error).message}`, (err as Error).stack);
      throw new UnauthorizedException('Invalid token');
    }
  }
}
