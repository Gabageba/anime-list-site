import type { EnumLiteralsOf } from '@utils/enumLiteralsOf';

export const CONTENT_SIZE = {
  FULL: 'full',
  CONTENT: 'content',
} as const;
export type ContentSize = EnumLiteralsOf<typeof CONTENT_SIZE>;
