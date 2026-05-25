import { Controller, Get, Head } from '@nestjs/common';

@Controller('health')
export class AppController {
  @Get()
  @Head()
  checkHealth() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
}
