import type { FC } from 'react';
import routes from '../../const/route';
import Main from '../../pages/Main';

interface Routes {
  path: string;
  Element: FC;
  name?: string;
}

export const authRoutes: Routes[] = [
  {
    path: routes.MAIN,
    Element: Main,
    name: 'Главная',
  },
];

export const publicRoutes: Routes[] = [];
