import { Injectable } from '@nestjs/common';
import { CreateNovelListDto } from './dto/create-novel-list.dto';
import { UpdateNovelListDto } from './dto/update-novel-list.dto';

@Injectable()
export class NovelListsService {
  create(createNovelListDto: CreateNovelListDto) {
    return 'This action adds a new novelList';
  }

  findAll() {
    return `This action returns all novelLists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} novelList`;
  }

  update(id: number, updateNovelListDto: UpdateNovelListDto) {
    return `This action updates a #${id} novelList`;
  }

  remove(id: number) {
    return `This action removes a #${id} novelList`;
  }
}
