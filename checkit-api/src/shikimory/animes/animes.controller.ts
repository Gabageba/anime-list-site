import { Controller, Get, Param, Query } from '@nestjs/common';
import { AnimesService } from './animes.service';

@Controller('shikimory')
export class AnimesController {
  constructor(private readonly animesService: AnimesService) {}

  @Get('animes')
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.animesService.findAll(page, limit);
  }

  @Get('anime/:id')
  findOne(@Param('id') id: string) {
    return this.animesService.findOne(+id);
  }
}
