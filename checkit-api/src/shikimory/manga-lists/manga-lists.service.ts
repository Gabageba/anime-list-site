import { Injectable } from '@nestjs/common';
import { CreateMangaListDto } from './dto/create-manga-list.dto';
import { UpdateMangaListDto } from './dto/update-manga-list.dto';

@Injectable()
export class MangaListsService {
  create(createMangaListDto: CreateMangaListDto) {
    return 'This action adds a new mangaList';
  }

  findAll() {
    return `This action returns all mangaLists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mangaList`;
  }

  update(id: number, updateMangaListDto: UpdateMangaListDto) {
    return `This action updates a #${id} mangaList`;
  }

  remove(id: number) {
    return `This action removes a #${id} mangaList`;
  }
}
