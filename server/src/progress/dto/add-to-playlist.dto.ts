import { IsString } from 'class-validator';

export class AddToPlaylistDto {
  @IsString()
  itemId: string;
}
