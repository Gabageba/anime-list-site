import { Module } from '@nestjs/common';
import { AnimeListsService } from './anime-lists.service';
import { AnimeListsController } from './anime-lists.controller';

@Module({
  controllers: [AnimeListsController],
  providers: [AnimeListsService],
})
export class AnimeListsModule {}
