import type { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

const ContentWrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.contentWrapper}>{children}</div>
);

export default ContentWrapper;
