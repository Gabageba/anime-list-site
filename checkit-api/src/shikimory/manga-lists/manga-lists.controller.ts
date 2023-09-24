import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MangaListsService } from './manga-lists.service';
import { CreateMangaListDto } from './dto/create-manga-list.dto';
import { UpdateMangaListDto } from './dto/update-manga-list.dto';

@Controller('manga-lists')
export class MangaListsController {
  constructor(private readonly mangaListsService: MangaListsService) {}

  @Post()
  create(@Body() createMangaListDto: CreateMangaListDto) {
    return this.mangaListsService.create(createMangaListDto);
  }

  @Get()
  findAll() {
    return this.mangaListsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mangaListsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMangaListDto: UpdateMangaListDto) {
    return this.mangaListsService.update(+id, updateMangaListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mangaListsService.remove(+id);
  }
}
