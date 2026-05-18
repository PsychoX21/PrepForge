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
