import { Controller, Patch, Get, Param, Body, Query, UseGuards } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { FirebaseAuthGuard } from '../auth/guards/firebase-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User } from '@prisma/client';

@Controller('progress')
@UseGuards(FirebaseAuthGuard)
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  /** PATCH /api/progress/:itemId — Update item progress */
  @Patch(':itemId')
  update(
    @Param('itemId') itemId: string,
    @CurrentUser() user: User,
    @Body()
    data: {
      status?: 'NOT_STARTED' | 'IN_PROGRESS' | 'DONE';
      isStarred?: boolean;
      isWatchLater?: boolean;
      completion?: number;
    },
  ) {
    return this.progressService.updateProgress(user.id, itemId, data);
  }

  /** GET /api/progress/summary — Overall progress summary */
  @Get('summary')
  getSummary(
    @CurrentUser() user: User,
    @Query('groupId') groupId?: string,
  ) {
    return this.progressService.getSummary(user.id, groupId);
  }

  /** GET /api/progress/starred — Get all starred items */
  @Get('starred')
  getStarred(@CurrentUser() user: User) {
    return this.progressService.getStarred(user.id);
  }

  /** GET /api/progress/watch-later — Get watch-later queue */
  @Get('watch-later')
  getWatchLater(@CurrentUser() user: User) {
    return this.progressService.getWatchLater(user.id);
  }
}
