import { Injectable, OnModuleDestroy, OnModuleInit, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: Redis;
  private readonly logger = new Logger('RedisService');

  constructor(private readonly configService: ConfigService) {}

  onModuleInit() {
    let redisUrl = this.configService.get<string>('REDIS_URL') || 'redis://localhost:6379';
    
    // Auto-upgrade to TLS for Upstash endpoints
    if (redisUrl.includes('upstash.io') && redisUrl.startsWith('redis://')) {
      redisUrl = redisUrl.replace('redis://', 'rediss://');
    }
    
    // Sanitize credentials in logs to protect passwords
    const sanitizedUrl = redisUrl.replace(/:[^@]+@/, ':****@');
    this.logger.log(`Connecting to Redis at: ${sanitizedUrl}`);
    
    const useTls = redisUrl.startsWith('rediss://');
    this.client = new Redis(redisUrl, {
      maxRetriesPerRequest: null,
      enableReadyCheck: false,
      tls: useTls ? { rejectUnauthorized: false } : undefined,
    });

    this.client.on('connect', () => {
      this.logger.log('Successfully connected to Redis / Upstash Cache!');
    });

    this.client.on('error', (err) => {
      this.logger.error('Redis connection error:', err);
    });
  }

  onModuleDestroy() {
    if (this.client) {
      this.client.disconnect();
    }
  }

  async get<T>(key: string): Promise<T | null> {
    try {
      const val = await this.client.get(key);
      if (!val) return null;
      return JSON.parse(val) as T;
    } catch (err) {
      this.logger.warn(`Failed to GET from Redis for key ${key}: ${err.message}`);
      return null;
    }
  }

  async set(key: string, value: any, ttlSeconds = 3600): Promise<void> {
    try {
      const stringified = JSON.stringify(value);
      await this.client.set(key, stringified, 'EX', ttlSeconds);
    } catch (err) {
      this.logger.warn(`Failed to SET in Redis for key ${key}: ${err.message}`);
    }
  }

  async del(key: string): Promise<void> {
    try {
      await this.client.del(key);
    } catch (err) {
      this.logger.warn(`Failed to DEL key ${key} from Redis: ${err.message}`);
    }
  }

  async invalidateUserPatterns(userId: string): Promise<void> {
    try {
      const keys = await this.client.keys(`*user:${userId}*`);
      if (keys.length > 0) {
        await this.client.del(...keys);
        this.logger.log(`Invalidated ${keys.length} cache keys for user ${userId}`);
      }
    } catch (err) {
      this.logger.warn(`Failed to invalidate keys for user ${userId}: ${err.message}`);
    }
  }

  async invalidateTrackPatterns(trackId: string): Promise<void> {
    try {
      const keys = await this.client.keys(`*track:${trackId}*`);
      if (keys.length > 0) {
        await this.client.del(...keys);
        this.logger.log(`Invalidated ${keys.length} cache keys for track ${trackId}`);
      }
    } catch (err) {
      this.logger.warn(`Failed to invalidate keys for track ${trackId}: ${err.message}`);
    }
  }
}
