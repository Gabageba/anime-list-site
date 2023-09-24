export type AnimeKind = 'tv';
export type AnimeStatus = 'released';
export type AnimeRating = 'r_plus';
export type AnimeGenre = {
  id: number;
  name: string;
  russian: string;
  kind: string;
  entry_type: string;
};
export type AnimeStudio = {
  id: number;
  name: string;
  filtered_name: string;
  real: boolean;
  image: string;
};
export type AnimeVideo = {
  id: number;
  url: string;
  image_url: string;
  player_url: string;
  name: string;
  kind: string;
  hosting: string;
};

export type AnimeImage = {
  original: string;
  preview: string;
  x96: string;
  x48: string;
};

export type AnimeScreenshot = {
  original: string;
  preview: string;
};

export interface IAnime {
  id: number;
  name: string;
  russian: string;
  image: AnimeImage;
  url: string;
  kind: AnimeKind;
  score: string;
  status: AnimeStatus;
  episodes: number;
  episodes_aired: number;
  aired_on: string;
  released_on: string;
  rating: AnimeRating;
  english: string[];
  japanese: string[];
  synonyms: string[];
  license_name_ru: string;
  duration: number;
  description: string;
  description_html: string;
  description_source?: null | string;
  franchise: string;
  favoured?: boolean;
  anons: boolean;
  ongoing: boolean;
  thread_id: number;
  topic_id: number;
  myanimelist_id: number;
  rates_scores_stats: { name: number; value: number }[];

  rates_statuses_stats: { name: string; value: number }[];
  updated_at: string;
  next_episode_at?: string;
  fansubbers: string[];
  fandubbers: string[];
  licensors: string[];
  genres: AnimeGenre[];
  studios: AnimeStudio[];
  videos: AnimeVideo[];
  screenshots: AnimeScreenshot[];
  user_rate?: string;
}

export interface IAnimeShort {
  id: number;
  name: string;
  russian: string;
  image: AnimeImage;
  url: string;
  kind: AnimeKind;
  score: string;
  status: AnimeStatus;
  episodes: number;
  episodes_aired: number;
  aired_on: string;
  released_on: string;
}
