import type { EnumLiteralsOf } from '@utils/enumLiteralsOf';

export const BUTTON_TYPE = {
  SUBMIT: 'submit',
  BUTTON: 'button',
  RESET: 'reset',
} as const;
export type ButtonType = EnumLiteralsOf<typeof BUTTON_TYPE>;

export enum ButtonStyle {
  'FILLED' = 'filled',
  'OUTLINE' = 'outline',
  'TEXT' = 'text',
  'DASHED' = 'dashed',
}

export enum ButtonShape {
  'SQUARE' = 'square',
  'CIRCLE' = 'circle',
  'ROUND' = 'round',
  'DEFAULT' = 'default',
}
