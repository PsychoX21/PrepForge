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
  private isDevMode = false;

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
        const nodeEnv = this.configService.get<string>('NODE_ENV', 'development');
        if (nodeEnv === 'production') {
          throw new Error('Firebase credentials are required in production environment!');
        }
        // Initialize without credentials for development
        this.logger.warn(
          'Firebase Admin credentials not found — running in dev bypass mode',
        );
        admin.initializeApp({ projectId: 'prepforge-dev' });
        this.isDevMode = true;
      }
    }
  }

  /**
   * Verify a Firebase ID token and return the decoded claims.
   */
  async verifyToken(idToken: string): Promise<admin.auth.DecodedIdToken> {
    if (this.isDevMode) {
      try {
        const parts = idToken.split('.');
        if (parts.length === 3) {
          const payload = JSON.parse(
            Buffer.from(parts[1], 'base64').toString('utf-8'),
          );
          return {
            uid: payload.user_id || payload.uid || 'dev-uid',
            email: payload.email || 'dev@example.com',
            name: payload.name || 'Developer',
            picture: payload.picture || null,
            ...payload,
          } as any;
        }
      } catch (e) {
        this.logger.warn(`Failed to parse local dev token: ${(e as Error).message}`);
      }
      return {
        uid: idToken,
        email: `${idToken}@example.com`,
        name: idToken,
        picture: null,
      } as any;
    }

    return admin.auth().verifyIdToken(idToken);
  }

  /**
   * Get user info from Firebase by UID.
   */
  async getUser(uid: string): Promise<admin.auth.UserRecord> {
    if (this.isDevMode) {
      return {
        uid,
        email: `${uid}@example.com`,
        displayName: uid,
        disabled: false,
        metadata: {
          creationTime: new Date().toISOString(),
          lastSignInTime: new Date().toISOString(),
          toJSON: () => ({}),
        },
        providerData: [],
        toJSON: () => ({}),
      } as any;
    }
    return admin.auth().getUser(uid);
  }
}
