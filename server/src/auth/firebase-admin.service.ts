/**
 * Firebase Admin SDK service.
 * Initializes the Admin SDK and provides token verification.
 */
import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseAdminService implements OnModuleInit {
  private readonly logger = new Logger(FirebaseAdminService.name);

  constructor(private readonly configService: ConfigService) {}

  onModuleInit() {
    if (admin.apps.length === 0) {
      const projectId = this.configService.get<string>('FIREBASE_PROJECT_ID');
      const privateKey = this.configService
        .get<string>('FIREBASE_PRIVATE_KEY', '')
        .replace(/\\n/g, '\n');
      const clientEmail = this.configService.get<string>('FIREBASE_CLIENT_EMAIL');

      if (projectId && privateKey && clientEmail) {
        admin.initializeApp({
          credential: admin.credential.cert({
            projectId,
            privateKey,
            clientEmail,
          }),
        });
        this.logger.log('Firebase Admin SDK initialized');
      } else {
        // Initialize without credentials for development
        this.logger.warn(
          'Firebase Admin credentials not found — running in dev mode',
        );
        admin.initializeApp({ projectId: 'prepforge-dev' });
      }
    }
  }

  /**
   * Verify a Firebase ID token and return the decoded claims.
   */
  async verifyToken(idToken: string): Promise<admin.auth.DecodedIdToken> {
    return admin.auth().verifyIdToken(idToken);
  }

  /**
   * Get user info from Firebase by UID.
   */
  async getUser(uid: string): Promise<admin.auth.UserRecord> {
    return admin.auth().getUser(uid);
  }
}
