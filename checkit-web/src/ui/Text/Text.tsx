import type { FC, PropsWithChildren, ReactNode } from 'react';
import type { Decoration, Level, Style, Weight } from '../../types/text.ts';
import { Type } from '../../types/text.ts';
import styles from './Text.module.scss';
import cn from 'classnames';

interface TextProps {
  type?: Type;
  level?: Level;
  className?: string;
  style?: Style;
  weight?: Weight;
  isItalic?: boolean;
  decoration?: Decoration;
  onClick?: () => void;
  // ellipsis?: boolean | IsEllipsis;
}

const Text: FC<PropsWithChildren<TextProps>> = ({
  type = Type.TEXT,
  className,
  level = 1,
  style = 'default',
  weight = 'regular',
  isItalic = false,
  decoration = 'default',
  onClick,
  // ellipsis = false,
  children,
}) => {
  const classNames = cn(
    className,
    style !== 'default' && styles[style],
    styles[weight],
    isItalic && 'italic',
    decoration !== 'default' && styles[decoration],
  );

  const generateTitleByLevel = (currentClassName: string, clickHandler?: () => void): ReactNode => {
    switch (level) {
      case 2:
        return (
          <h2 className={currentClassName} onClick={clickHandler}>
            {children}
          </h2>
        );
      case 3:
        return (
          <h3 className={currentClassName} onClick={clickHandler}>
            {children}
          </h3>
        );
      case 4:
        return (
          <h4 className={currentClassName} onClick={clickHandler}>
            {children}
          </h4>
        );
      case 5:
        return (
          <h5 className={currentClassName} onClick={clickHandler}>
            {children}
          </h5>
        );
      case 1:
      default:
        return (
          <h1 className={currentClassName} onClick={clickHandler}>
            {children}
          </h1>
        );
    }
  };

  const generateTextByType = (currentClassName: string, clickHandler?: () => void): ReactNode => {
    switch (type) {
      case Type.PARAGRAPH:
        return (
          <p className={currentClassName} onClick={clickHandler}>
            {children}
          </p>
        );
      case Type.TITLE: {
        return generateTitleByLevel(currentClassName, clickHandler);
      }
      case Type.TEXT:
      default:
        return (
          <span className={currentClassName} onClick={clickHandler}>
            {children}
          </span>
        );
    }
  };

  return <>{generateTextByType(classNames, onClick)}</>;
};

export default Text;
