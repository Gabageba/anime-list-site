import type { EnumLiteralsOf } from '@utils/enumLiteralsOf';

export const FONT_WEIGHT = {
  THIN: 'thin',
  EXTRA_LIGHT: 'extraLight',
  LIGHT: 'light',
  REGULAR: 'regular',
  MEDIUM: 'medium',
  SEMI_BOLD: 'semiBold',
  BOLD: 'bold',
  EXTRA_BOLD: 'extraBold',
} as const;
export type FontWeight = EnumLiteralsOf<typeof FONT_WEIGHT>;

export const ALIGN = {
  BASELINE: 'baseline',
  CENTER: 'center',
  FLEX_END: 'flex-end',
  FLEX_START: 'flex-start',
} as const;
export type Align = EnumLiteralsOf<typeof ALIGN>;

export const JUSTIFY = {
  BASELINE: 'baseline',
  CENTER: 'center',
  FLEX_END: 'flex-end',
  FLEX_START: 'flex-start',
  SPACE_AROUND: 'space-around',
  SPACE_BETWEEN: 'space-between',
  SPACE_EVENLY: 'space-evenly',
} as const;
export type Justify = EnumLiteralsOf<typeof JUSTIFY>;

export const SIZE = {
  LARGE: 'large',
  MIDDLE: 'middle',
  SMALL: 'small',
} as const;
export type Size = EnumLiteralsOf<typeof SIZE>;
