import { Controller, Get, Param } from '@nestjs/common';
import { AnimesService } from './animes.service';

@Controller('shikimory')
export class AnimesController {
  constructor(private readonly animesService: AnimesService) {}

  @Get('animes')
  findAll() {
    return this.animesService.findAll();
  }

  @Get('anime/:id')
  findOne(@Param('id') id: string) {
    return this.animesService.findOne(+id);
  }
}
