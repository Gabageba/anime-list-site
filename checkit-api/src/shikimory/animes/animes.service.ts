import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { IAnime, IAnimeShort } from '../../types/shikimory/animes';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AnimesService {
  constructor(private readonly configService: ConfigService) {}
  //TODO: add env
  async findAll(): Promise<IAnimeShort[]> {
    const { data } = await axios.get(
      this.configService.get('SHIKIMORY_URL') + '/animes',
    );
    return data;
  }

  async findOne(id: number): Promise<IAnime> {
    const { data } = await axios.get(
      this.configService.get('SHIKIMORY_URL') + `/animes/${id}`,
    );
    return data;
  }
}
