import { Module } from '@nestjs/common';
import { MangaListsService } from './manga-lists.service';
import { MangaListsController } from './manga-lists.controller';

@Module({
  controllers: [MangaListsController],
  providers: [MangaListsService],
})
export class MangaListsModule {}
