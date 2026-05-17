import { Module } from '@nestjs/common';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { AuthModule } from '../auth/auth.module';
import { SeedModule } from '../seed/seed.module';

@Module({
  imports: [AuthModule, SeedModule],
  controllers: [GroupsController],
  providers: [GroupsService],
  exports: [GroupsService],
})
export class GroupsModule {}
