import { PartialType } from '@nestjs/swagger';
import { CreateNovelListDto } from './create-novel-list.dto';

export class UpdateNovelListDto extends PartialType(CreateNovelListDto) {}
