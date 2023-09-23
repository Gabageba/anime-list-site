import type { FC } from 'react';
import routes from '../../const/route';
import Auth from '../../pages/Auth/Auth';
import Main from '../../pages/Main/Main';

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

export const publicRoutes: Routes[] = [
  {
    path: routes.AUTH_ROUTE,
    Element: Auth,
    name: 'Авторизация',
  },
];
