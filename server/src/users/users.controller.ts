import {
  Controller,
  Get,
  Patch,
  Body,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { FirebaseAuthGuard } from '../auth/guards/firebase-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User } from '@prisma/client';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('users')
@UseGuards(FirebaseAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /** GET /api/users/me — Get current user profile */
  @Get('me')
  getProfile(@CurrentUser() user: User) {
    return this.usersService.getProfile(user.id);
  }

  /** PATCH /api/users/me — Update profile */
  @Patch('me')
  updateProfile(
    @CurrentUser() user: User,
    @Body() data: UpdateProfileDto,
  ) {
    return this.usersService.updateProfile(user.id, data);
  }

  /** GET /api/users/me/stats — Get user stats (XP, level, streak) */
  @Get('me/stats')
  getStats(@CurrentUser() user: User) {
    return this.usersService.getStats(user.id);
  }

  /** GET /api/users/me/heatmap — Get activity heatmap data */
  @Get('me/heatmap')
  getHeatmap(@CurrentUser() user: User) {
    return this.usersService.getHeatmap(user.id);
  }

  /** GET /api/users/me/activities — Get activities and period totals */
  @Get('me/activities')
  getActivities(@CurrentUser() user: User) {
    return this.usersService.getActivities(user.id);
  }
}
