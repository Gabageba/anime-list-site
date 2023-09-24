import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimeListsService } from './anime-lists.service';
import { CreateAnimeListDto } from './dto/create-anime-list.dto';
import { UpdateAnimeListDto } from './dto/update-anime-list.dto';

@Controller('anime-lists')
export class AnimeListsController {
  constructor(private readonly animeListsService: AnimeListsService) {}

  @Post()
  create(@Body() createAnimeListDto: CreateAnimeListDto) {
    return this.animeListsService.create(createAnimeListDto);
  }

  @Get()
  findAll() {
    return this.animeListsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animeListsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimeListDto: UpdateAnimeListDto) {
    return this.animeListsService.update(+id, updateAnimeListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animeListsService.remove(+id);
  }
}
