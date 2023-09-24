import { PartialType } from '@nestjs/swagger';
import { CreateMangasDto } from './create-mangas.dto';

export class UpdateMangasDto extends PartialType(CreateMangasDto) {}
