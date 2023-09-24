import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AnimeListsModule } from './shikimory/anime-lists/anime-lists.module';
import { MangaListsModule } from './shikimory/manga-lists/manga-lists.module';
import { NovelListsModule } from './shikimory/novel-lists/novel-lists.module';
import { AuthModule } from './shikimory/auth/auth.module';
import { AnimesModule } from './shikimory/animes/animes.module';
import { MangasModule } from './shikimory/mangas/mangas.module';
import { NovelsModule } from './shikimory/novels/novels.module';
import { SettingsModule } from './settings/settings.module';
import { NotificationsModule } from './notifications/notifications.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { ListsModule as ShikimoryListModule } from './shikimory/lists/lists.module';
import { ListsModule as CheckitListsModule } from './checkit/lists/lists.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        synchronize: true,
        entities: [__dirname + '/**/*.entity{.js, .ts}'],
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AnimeListsModule,
    MangaListsModule,
    NovelListsModule,
    AuthModule,
    AnimesModule,
    MangasModule,
    NovelsModule,
    SettingsModule,
    NotificationsModule,
    SubscriptionsModule,
    ShikimoryListModule,
    CheckitListsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
