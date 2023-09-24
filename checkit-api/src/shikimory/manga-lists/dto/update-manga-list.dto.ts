import { PartialType } from '@nestjs/swagger';
import { CreateMangaListDto } from './create-manga-list.dto';

export class UpdateMangaListDto extends PartialType(CreateMangaListDto) {}
