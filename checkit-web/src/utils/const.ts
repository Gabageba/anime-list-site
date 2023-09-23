import type { IWatchingStatuses } from '../types/statuses';

export const WATCHING_STATUSES: IWatchingStatuses[] = [
  { id: 0, code: 'completed', name: 'Просмотрено' },
  { id: 1, code: 'planned', name: 'В планах' },
  { id: 2, code: 'on_hold', name: 'Отложено' },
  { id: 3, code: 'dropped', name: 'Брошено' },
];
