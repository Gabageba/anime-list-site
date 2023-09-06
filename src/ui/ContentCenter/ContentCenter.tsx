import type { FC, PropsWithChildren } from 'react';
import styles from './ContentCenter.module.scss';
import type { Size } from '@customTypes/content.ts';
import cn from 'classnames';

interface ContentCenterProps {
  size?: Size;
  className?: string;
}

const ContentCenter: FC<PropsWithChildren<ContentCenterProps>> = ({
  size = 'content',
  children,
  className,
}) => {
  return <div className={cn(styles.center, styles[size], className)}>{children}</div>;
};

export default ContentCenter;
