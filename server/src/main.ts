/**
 * PrepForge API Server — Entry Point
 */
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import compression from 'compression';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Global prefix
  app.setGlobalPrefix('api');

  // Security
  app.use(
    helmet({
      crossOriginOpenerPolicy: { policy: 'same-origin-allow-popups' },
    }),
  );
  app.use(compression());

  // CORS
  const corsOrigin = configService.get<string>('CORS_ORIGIN', 'http://localhost:4000');
  const allowedOrigins = corsOrigin.split(',').map((o) => o.trim().replace(/\/$/, ''));

  app.enableCors({
    origin: (
      origin: string | undefined,
      callback: (err: Error | null, allow?: boolean) => void,
    ) => {
      if (!origin) {
        callback(null, true);
        return;
      }
      const sanitized = origin.replace(/\/$/, '');
      const isAllowed = allowedOrigins.some((o) =>
        sanitized === o.replace(/\/$/, '')
      );
      if (isAllowed) {
        callback(null, true);
      } else {
        console.warn(`[CORS Blocked] Request Origin: ${origin}, Allowed Origins: ${allowedOrigins.join(', ')}`);
        callback(new Error(`Origin ${origin} not allowed by CORS`));
      }
    },
    credentials: true,
  });

  // Global pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  // Global filters & interceptors
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TransformInterceptor());

  const port = configService.get<number>('PORT', 4001);
  await app.listen(port);
  console.log(`🔥 PrepForge API running on http://localhost:${port}/api`);
}

bootstrap();
