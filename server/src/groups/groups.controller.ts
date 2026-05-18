import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { GroupsService } from './groups.service';
import { FirebaseAuthGuard } from '../auth/guards/firebase-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User } from '@prisma/client';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Throttle } from '@nestjs/throttler';

@Controller('groups')
@UseGuards(FirebaseAuthGuard)
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  /** POST /api/groups — Create a new group */
  @Post()
  create(@CurrentUser() user: User, @Body() dto: CreateGroupDto) {
    return this.groupsService.create(user.id, dto);
  }

  /** GET /api/groups — List user's groups */
  @Get()
  findAll(@CurrentUser() user: User) {
    return this.groupsService.findAllForUser(user.id);
  }

  /** GET /api/groups/:id — Get group details */
  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser() user: User) {
    return this.groupsService.findOne(id, user.id);
  }

  /** POST /api/groups/join/:inviteCode — Join a group via invite code */
  @Post('join/:inviteCode')
  @Throttle({ default: { ttl: 60000, limit: 10 } })
  joinByCode(
    @Param('inviteCode') inviteCode: string,
    @CurrentUser() user: User,
  ) {
    return this.groupsService.joinByInvite(inviteCode, user.id);
  }

  /** POST /api/groups/:id/join — Join a group via invite code (compatibility fallback) */
  @Post(':id/join')
  @Throttle({ default: { ttl: 60000, limit: 10 } })
  join(
    @Param('id') inviteCode: string,
    @CurrentUser() user: User,
  ) {
    return this.groupsService.joinByInvite(inviteCode, user.id);
  }

  /** POST /api/groups/:id/invite — Generate new invite code */
  @Post(':id/invite')
  generateInvite(@Param('id') id: string, @CurrentUser() user: User) {
    return this.groupsService.generateInvite(id, user.id);
  }

  /** GET /api/groups/:id/leaderboard — Get group leaderboard */
  @Get(':id/leaderboard')
  getLeaderboard(@Param('id') id: string, @CurrentUser() user: User) {
    return this.groupsService.getLeaderboard(id, user.id);
  }

  /** GET /api/groups/:id/export — Export group curriculum as JSON */
  @Get(':id/export')
  exportGroup(@Param('id') id: string, @CurrentUser() user: User) {
    return this.groupsService.exportGroup(id, user.id);
  }

  /** PATCH /api/groups/:id — Update group settings */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @CurrentUser() user: User,
    @Body() dto: UpdateGroupDto,
  ) {
    return this.groupsService.updateGroup(id, user.id, dto);
  }

  /** DELETE /api/groups/:id — Delete a group (owner only) */
  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUser() user: User) {
    return this.groupsService.deleteGroup(id, user.id);
  }
}
