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
  async verifyAndSyncUser(idToken: string) {
    try {
      const decoded = await this.firebaseAdmin.verifyToken(idToken);

      let user;
      try {
        user = await this.prisma.user.upsert({
          where: { firebaseUid: decoded.uid },
          update: {
            email: decoded.email || undefined,
            displayName: decoded.name || undefined,
            photoUrl: decoded.picture || undefined,
          },
          create: {
            firebaseUid: decoded.uid,
            email: decoded.email || '',
            displayName:
              decoded.name || decoded.email?.split('@')[0] || 'User',
            photoUrl: decoded.picture || null,
          },
        });
      } catch (upsertError) {
        this.logger.warn(`Upsert conflict on verifyAndSyncUser: ${(upsertError as Error).message}. Retrying findUnique...`);
        user = await this.prisma.user.findUnique({
          where: { firebaseUid: decoded.uid },
        });
        if (!user) throw upsertError;
      }

      // Update login streak and award daily XP
      await this.gamification.processLogin(user.id);

      return user;
    } catch (err) {
      this.logger.error(`Failed to verify and sync user: ${(err as Error).message}`, (err as Error).stack);
      throw new UnauthorizedException('Invalid token');
    }
  }
}
