import type { EnumLiteralsOf } from '@utils/enumLiteralsOf';

export const TEXT_TYPE = {
  TITLE: 'title',
  PARAGRAPH: 'paragraph',
  TEXT: 'text',
} as const;
export type TextType = EnumLiteralsOf<typeof TEXT_TYPE>;

export type TextLevel = 1 | 2 | 3 | 4 | 5;

export const TEXT_DECORATION = {
  DEFAULT: 'default',
  UNDERLINE: 'underline',
  OVERLINE: 'overline',
  DELETE: 'delete',
} as const;
export type TextDecoration = EnumLiteralsOf<typeof TEXT_DECORATION>;

export const TEXT_STYLE = {
  DEFAULT: 'default',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
} as const;
export type TextStyle = EnumLiteralsOf<typeof TEXT_STYLE>;

export type IsEllipsis = boolean | IEllipsis;

export const TEXT_SYMBOL = {
  ELLIPSIS: 'ellipsis',
  CLIP: 'clip',
  FADE: 'fade',
} as const;
export type TextSymbol = EnumLiteralsOf<typeof TEXT_SYMBOL>;

interface IEllipsis {
  expandable: boolean;
  rows: number;
  symbol: TextSymbol | string;
  onExpand?: () => void;
}
