import { Controller, Get, Param, Post, Patch, Delete, Body, UseGuards } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { FirebaseAuthGuard } from '../auth/guards/firebase-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User } from '@prisma/client';
import {
  CreateTrackDto,
  UpdateTrackDto,
  CreateCategoryDto,
  UpdateCategoryDto,
  CreateResourceDto,
  UpdateResourceDto,
  CreateUnitDto,
  UpdateUnitDto,
  CreateSubUnitDto,
  UpdateSubUnitDto,
  CreateItemDto,
  UpdateItemDto,
} from './dto/track-crud.dto';

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

  // ─── Custom CRUD Endpoints ────────────────────────────────────────────────

  @Post()
  createTrack(@Body() body: CreateTrackDto, @CurrentUser() user: User) {
    return this.tracksService.createTrack(user.id, body);
  }

  @Patch(':id')
  updateTrack(@Param('id') id: string, @Body() body: UpdateTrackDto, @CurrentUser() user: User) {
    return this.tracksService.updateTrack(user.id, id, body);
  }

  @Delete(':id')
  deleteTrack(@Param('id') id: string, @CurrentUser() user: User) {
    return this.tracksService.deleteTrack(user.id, id);
  }

  @Post(':id/categories')
  createCategory(@Param('id') trackId: string, @Body() body: CreateCategoryDto, @CurrentUser() user: User) {
    return this.tracksService.createCategory(user.id, trackId, body);
  }

  @Patch('categories/:catId')
  updateCategory(@Param('catId') catId: string, @Body() body: UpdateCategoryDto, @CurrentUser() user: User) {
    return this.tracksService.updateCategory(user.id, catId, body);
  }

  @Delete('categories/:catId')
  deleteCategory(@Param('catId') catId: string, @CurrentUser() user: User) {
    return this.tracksService.deleteCategory(user.id, catId);
  }

  @Post('categories/:catId/resources')
  createResource(@Param('catId') catId: string, @Body() body: CreateResourceDto, @CurrentUser() user: User) {
    return this.tracksService.createResource(user.id, catId, body);
  }

  @Patch('resources/:resId')
  updateResource(@Param('resId') resId: string, @Body() body: UpdateResourceDto, @CurrentUser() user: User) {
    return this.tracksService.updateResource(user.id, resId, body);
  }

  @Delete('resources/:resId')
  deleteResource(@Param('resId') resId: string, @CurrentUser() user: User) {
    return this.tracksService.deleteResource(user.id, resId);
  }

  @Post('resources/:resId/units')
  createUnit(@Param('resId') resId: string, @Body() body: CreateUnitDto, @CurrentUser() user: User) {
    return this.tracksService.createUnit(user.id, resId, body);
  }

  @Patch('units/:unitId')
  updateUnit(@Param('unitId') unitId: string, @Body() body: UpdateUnitDto, @CurrentUser() user: User) {
    return this.tracksService.updateUnit(user.id, unitId, body);
  }

  @Delete('units/:unitId')
  deleteUnit(@Param('unitId') unitId: string, @CurrentUser() user: User) {
    return this.tracksService.deleteUnit(user.id, unitId);
  }

  @Post('units/:unitId/subunits')
  createSubUnit(@Param('unitId') unitId: string, @Body() body: CreateSubUnitDto, @CurrentUser() user: User) {
    return this.tracksService.createSubUnit(user.id, unitId, body);
  }

  @Patch('subunits/:subId')
  updateSubUnit(@Param('subId') subId: string, @Body() body: UpdateSubUnitDto, @CurrentUser() user: User) {
    return this.tracksService.updateSubUnit(user.id, subId, body);
  }

  @Delete('subunits/:subId')
  deleteSubUnit(@Param('subId') subId: string, @CurrentUser() user: User) {
    return this.tracksService.deleteSubUnit(user.id, subId);
  }

  @Post('subunits/:subId/items')
  createItem(@Param('subId') subId: string, @Body() body: CreateItemDto, @CurrentUser() user: User) {
    return this.tracksService.createItem(user.id, subId, body);
  }

  @Patch('items/:itemId')
  updateItem(@Param('itemId') itemId: string, @Body() body: UpdateItemDto, @CurrentUser() user: User) {
    return this.tracksService.updateItem(user.id, itemId, body);
  }

  @Delete('items/:itemId')
  deleteItem(@Param('itemId') itemId: string, @CurrentUser() user: User) {
    return this.tracksService.deleteItem(user.id, itemId);
  }
}
