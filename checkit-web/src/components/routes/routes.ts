import type { FC } from 'react';
import { routes } from '../../const/route.ts';
import Auth from '../../pages/Auth/Auth.tsx';
import Main from '../../pages/Main/Main.tsx';

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
