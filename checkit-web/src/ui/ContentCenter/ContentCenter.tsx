import type { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './ContentCenter.module.scss';
import type { Size } from '../../types/content';

interface ContentCenterProps {
  size?: Size;
  className?: string;
}

const ContentCenter: FC<PropsWithChildren<ContentCenterProps>> = ({
  size = 'content',
  children,
  className,
}) => <div className={cn(styles.center, styles[size], className)}>{children}</div>;

export default ContentCenter;
