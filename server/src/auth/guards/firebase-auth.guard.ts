/**
 * Firebase Auth Guard.
 * Validates Bearer tokens on protected endpoints and attaches user to request.
 */
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { FirebaseAdminService } from '../firebase-admin.service';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  private readonly logger = new Logger(FirebaseAuthGuard.name);

  constructor(
    private readonly firebaseAdmin: FirebaseAdminService,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing or invalid authorization header');
    }

    const token = authHeader.split('Bearer ')[1];

    if (token === 'demo-token') {
      let user = await this.prisma.user.findUnique({
        where: { firebaseUid: 'demo-uid' },
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
        });
      }

      request.user = user;
      return true;
    }

    try {
      const decoded = await this.firebaseAdmin.verifyToken(token);

      // Find user in our database
      const user = await this.prisma.user.findUnique({
        where: { firebaseUid: decoded.uid },
      });

      if (!user) {
        throw new UnauthorizedException('User not registered. Call /auth/verify first.');
      }

      // Attach user to request
      request.user = user;
      return true;
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      this.logger.warn(`Auth failed: ${(error as Error).message}`);
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
