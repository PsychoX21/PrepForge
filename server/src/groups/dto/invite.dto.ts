/**
 * Invite DTO — validates group invite operations.
 */
import { IsString, Length } from 'class-validator';

export class JoinGroupDto {
  @IsString()
  @Length(6, 12)
  inviteCode: string;
}

export class RefreshInviteDto {
  // No body needed — group ID comes from URL param
}
