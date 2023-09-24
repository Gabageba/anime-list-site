import { Injectable } from '@nestjs/common';
import { CreateAnimeListDto } from './dto/create-anime-list.dto';
import { UpdateAnimeListDto } from './dto/update-anime-list.dto';

@Injectable()
export class AnimeListsService {
  create(createAnimeListDto: CreateAnimeListDto) {
    return 'This action adds a new animeList';
  }

  findAll() {
    return `This action returns all animeLists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} animeList`;
  }

  update(id: number, updateAnimeListDto: UpdateAnimeListDto) {
    return `This action updates a #${id} animeList`;
  }

  remove(id: number) {
    return `This action removes a #${id} animeList`;
  }
}
