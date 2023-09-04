export enum Type {
  'TITLE' = 'title',
  'PARAGRAPH' = 'paragraph',
  'TEXT' = 'text',
}

export type Level = 1 | 2 | 3 | 4 | 5;

export type Decoration = 'default' | 'underline' | 'overline' | 'delete';

export type Style = 'default' | 'secondary' | 'success' | 'warning' | 'danger';

export type Weight =
  | 'thin'
  | 'extraLight'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'extraBold';

export type IsEllipsis = boolean | Ellipsis;

interface Ellipsis {
  expandable: boolean;
  rows: number;
  symbol: 'ellipsis' | 'clip' | 'fade' | string;
  onExpand?: () => void;
}
