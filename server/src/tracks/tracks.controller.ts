import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { FirebaseAuthGuard } from '../auth/guards/firebase-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User } from '@prisma/client';

@Controller('tracks')
@UseGuards(FirebaseAuthGuard)
export class TracksController {
  constructor(private readonly tracksService: TracksService) {}

  /** GET /api/tracks/group/:groupId — List tracks for a group */
  @Get('group/:groupId')
  findByGroup(
    @Param('groupId') groupId: string,
    @CurrentUser() user: User,
  ) {
    return this.tracksService.findByGroup(groupId, user.id);
  }

  /** GET /api/tracks/:id/tree — Full resource tree with user progress */
  @Get(':id/tree')
  getTree(@Param('id') id: string, @CurrentUser() user: User) {
    return this.tracksService.getFullTree(id, user.id);
  }

  /** GET /api/tracks/:id/summary — Track summary with completion stats */
  @Get(':id/summary')
  getSummary(@Param('id') id: string, @CurrentUser() user: User) {
    return this.tracksService.getTrackSummary(id, user.id);
  }
}
