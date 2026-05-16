import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * POST /api/auth/verify
   * Verify a Firebase ID token and return the user profile.
   */
  @Post('verify')
  @HttpCode(HttpStatus.OK)
  async verifyToken(@Body('idToken') idToken: string) {
    return this.authService.verifyAndSyncUser(idToken);
  }
}
