import type { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import { CONTENT_SIZE, type ContentSize } from '@ui/ContentCenter/types';
import styles from './styles.module.scss';

interface ContentCenterProps {
  size?: ContentSize;
  className?: string;
}

const ContentCenter: FC<PropsWithChildren<ContentCenterProps>> = ({
  size = CONTENT_SIZE.CONTENT,
  children,
  className,
}) => (
  <div className={cn(styles.center, styles[size], className)}>{children}</div>
);

export default ContentCenter;
