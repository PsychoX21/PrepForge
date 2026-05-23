import { Controller, Patch, Get, Post, Delete, Param, Body, Query, UseGuards } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { FirebaseAuthGuard } from '../auth/guards/firebase-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User } from '@prisma/client';
import { Throttle } from '@nestjs/throttler';
import { UpdateProgressDto } from './dto/update-progress.dto';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { AddToPlaylistDto } from './dto/add-to-playlist.dto';

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
    data: UpdateProgressDto,
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
  getStarred(
    @CurrentUser() user: User,
    @Query('skip') skip?: string,
    @Query('take') take?: string,
  ) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.progressService.getStarred(user.id, skipNum, takeNum);
  }

  /** GET /api/progress/watch-later — Get watch-later queue */
  @Get('watch-later')
  getWatchLater(
    @CurrentUser() user: User,
    @Query('skip') skip?: string,
    @Query('take') take?: string,
  ) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.progressService.getWatchLater(user.id, skipNum, takeNum);
  }

  /** GET /api/progress/playlists — Get all custom playlists */
  @Get('playlists')
  getPlaylists(@CurrentUser() user: User) {
    return this.progressService.getPlaylists(user.id);
  }

  /** POST /api/progress/playlists — Create a custom playlist */
  @Post('playlists')
  createPlaylist(
    @CurrentUser() user: User,
    @Body() data: CreatePlaylistDto,
  ) {
    return this.progressService.createPlaylist(user.id, data.name, data.description);
  }

  /** DELETE /api/progress/playlists/:id — Delete a playlist */
  @Delete('playlists/:id')
  deletePlaylist(
    @CurrentUser() user: User,
    @Param('id') id: string,
  ) {
    return this.progressService.deletePlaylist(user.id, id);
  }

  /** POST /api/progress/playlists/:id/items — Add item to playlist */
  @Post('playlists/:id/items')
  addToPlaylist(
    @CurrentUser() user: User,
    @Param('id') id: string,
    @Body() data: AddToPlaylistDto,
  ) {
    return this.progressService.addToPlaylist(user.id, id, data.itemId);
  }

  /** DELETE /api/progress/playlists/:id/items/:itemId — Remove item from playlist */
  @Delete('playlists/:id/items/:itemId')
  removeFromPlaylist(
    @CurrentUser() user: User,
    @Param('id') id: string,
    @Param('itemId') itemId: string,
  ) {
    return this.progressService.removeFromPlaylist(user.id, id, itemId);
  }
}
