import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NovelListsService } from './novel-lists.service';
import { CreateNovelListDto } from './dto/create-novel-list.dto';
import { UpdateNovelListDto } from './dto/update-novel-list.dto';

@Controller('novel-lists')
export class NovelListsController {
  constructor(private readonly novelListsService: NovelListsService) {}

  @Post()
  create(@Body() createNovelListDto: CreateNovelListDto) {
    return this.novelListsService.create(createNovelListDto);
  }

  @Get()
  findAll() {
    return this.novelListsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.novelListsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNovelListDto: UpdateNovelListDto) {
    return this.novelListsService.update(+id, updateNovelListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.novelListsService.remove(+id);
  }
}
