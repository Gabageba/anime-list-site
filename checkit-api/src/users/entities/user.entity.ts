import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Setting } from '../../settings/entities/setting.entity';
import { Notification } from '../../notifications/entities/notification.entity';
import { List as ShikimoryList } from '../../shikimory/lists/entities/list.entity';
import { List as CheckitList } from '../../checkit/lists/entities/list.entity';

export class User {
  @PrimaryGeneratedColumn({ type: 'number' })
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: '1', description: 'Уникальный id пользователя' })
  id: number;

  @Column({ unique: true, type: 'string' })
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'gabageba',
    description: 'Уникальное имя пользователя',
  })
  nickName: string;

  @Column({ type: 'string' })
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'asdfadf',
    description: 'Зашифрованный пароль пользователя',
  })
  password: string;

  @Column({ type: 'string' })
  @IsString()
  @ApiProperty({ example: '', description: 'Фото профиля' })
  avatar: string;

  @Column({ type: 'string' })
  @IsString()
  @ApiProperty({ example: '', description: 'Роль пользователя' })
  role: string;

  @Column()
  @IsNotEmpty()
  @ApiProperty({ example: '', description: 'Настройки пользователя' })
  settings: Setting;

  @Column()
  @IsNotEmpty()
  @ApiProperty({ example: '', description: 'Настройки уведомлений' })
  notifications: Notification;

  @Column()
  @ApiProperty({ example: '', description: 'Лист shikimory' })
  shikimoryList: ShikimoryList;

  @Column()
  @ApiProperty({ example: '', description: 'Лист checkit' })
  checkitList: CheckitList;
}
