/**
 * Root application module.
 * Registers all feature modules and global configuration.
 */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';
import { TracksModule } from './tracks/tracks.module';
import { ProgressModule } from './progress/progress.module';
import { GamificationModule } from './gamification/gamification.module';
import { RealtimeModule } from './realtime/realtime.module';
import { SeedModule } from './seed/seed.module';
import { RedisModule } from './redis/redis.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    // Global config — reads .env
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '../.env'],
    }),

    // Database
    PrismaModule,

    // Global Redis caching layer
    RedisModule,

    // Rate Limiting
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 600,
    }]),

    // Feature modules
    AuthModule,
    UsersModule,
    GroupsModule,
    TracksModule,
    ProgressModule,
    GamificationModule,
    RealtimeModule,
    SeedModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
