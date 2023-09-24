import { PartialType } from '@nestjs/swagger';
import { CreateAnimeListDto } from './create-anime-list.dto';

export class UpdateAnimeListDto extends PartialType(CreateAnimeListDto) {}
