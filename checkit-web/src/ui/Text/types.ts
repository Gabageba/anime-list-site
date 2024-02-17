export enum TextType {
  'TITLE' = 'title',
  'PARAGRAPH' = 'paragraph',
  'TEXT' = 'text',
}

export type TextLevel = 1 | 2 | 3 | 4 | 5;

export enum TextDecoration {
  'DEFAULT' = 'default',
  'UNDERLINE' = 'underline',
  'OVERLINE' = 'overline',
  'DELETE' = 'delete',
}

export enum TextStyle {
  'DEFAULT' = 'default',
  'SECONDARY' = 'secondary',
  'SUCCESS' = 'success',
  'WARNING' = 'warning',
  'DANGER' = 'danger',
}

export type IsEllipsis = boolean | IEllipsis;

export enum TextSymbol {
  'ELLIPSIS' = 'ellipsis',
  'CLIP' = 'clip',
  'FADE' = 'fade',
}

interface IEllipsis {
  expandable: boolean;
  rows: number;
  symbol: TextSymbol | string;
  onExpand?: () => void;
}
