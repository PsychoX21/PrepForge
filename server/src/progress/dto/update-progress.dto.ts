import { IsOptional, IsEnum, IsBoolean, IsNumber, Min, Max } from 'class-validator';
import { ProgressStatus } from '@prisma/client';

export class UpdateProgressDto {
  @IsOptional()
  @IsEnum(ProgressStatus)
  status?: ProgressStatus;

  @IsOptional()
  @IsBoolean()
  isStarred?: boolean;

  @IsOptional()
  @IsBoolean()
  isWatchLater?: boolean;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  completion?: number;
}
