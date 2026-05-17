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

    try {
      const decoded = await this.firebaseAdmin.verifyToken(token);

      // Find or create user in our database
      let user = await this.prisma.user.findUnique({
        where: { firebaseUid: decoded.uid },
      });

      if (!user && decoded.email) {
        user = await this.prisma.user.findFirst({
          where: { email: decoded.email },
        });
        if (user) {
          user = await this.prisma.user.update({
            where: { id: user.id },
            data: { firebaseUid: decoded.uid },
          });
          this.logger.log(`Linked existing user email ${user.email} to Firebase UID ${decoded.uid}`);
        }
      }

      if (!user) {
        try {
          user = await this.prisma.user.create({
            data: {
              firebaseUid: decoded.uid,
              email: decoded.email || '',
              displayName: decoded.name || decoded.email?.split('@')[0] || 'User',
              photoUrl: decoded.picture || null,
            },
          });
          this.logger.log(`New user created: ${user.email}`);
        } catch (createError) {
          // Fallback if another request concurrently created the user
          user = await this.prisma.user.findUnique({
            where: { firebaseUid: decoded.uid },
          });
          if (!user) {
            throw createError;
          }
        }
      }

      // Attach user to request
      request.user = user;
      return true;
    } catch (error) {
      this.logger.warn(`Auth failed: ${(error as Error).message}`);
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
