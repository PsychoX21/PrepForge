import { Injectable, UnauthorizedException } from '@nestjs/common';
import { FirebaseAdminService } from './firebase-admin.service';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly firebaseAdmin: FirebaseAdminService,
    private readonly prisma: PrismaService,
  ) {}

  /**
   * Verify an ID token and sync/create the user in our database.
   */
  async verifyAndSyncUser(idToken: string) {
    try {
      const decoded = await this.firebaseAdmin.verifyToken(idToken);

      const user = await this.prisma.user.upsert({
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

      return user;
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
