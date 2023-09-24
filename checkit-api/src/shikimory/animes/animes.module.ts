import { Module } from '@nestjs/common';
import { AnimesService } from './animes.service';
import { AnimesController } from './animes.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [AnimesController],
  providers: [AnimesService, ConfigService],
})
export class AnimesModule {}
