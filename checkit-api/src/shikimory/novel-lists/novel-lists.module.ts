import { Module } from '@nestjs/common';
import { NovelListsService } from './novel-lists.service';
import { NovelListsController } from './novel-lists.controller';

@Module({
  controllers: [NovelListsController],
  providers: [NovelListsService],
})
export class NovelListsModule {}
