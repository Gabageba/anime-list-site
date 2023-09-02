import type { Dispatch, FC, SetStateAction } from 'react';
import styles from './WatchingStatusItem.module.scss';
import type { WatchingStatuses } from '@customTypes/statuses.ts';

interface StatusItemProps {
  status: WatchingStatuses;
  active: WatchingStatuses;
  setActive: Dispatch<SetStateAction<WatchingStatuses>>;
}

const WatchingStatusItem: FC<StatusItemProps> = ({ status, active, setActive }) => {
  const isActive = active.id === status.id;
  return (
    <li onClick={() => setActive(status)}>
      <span className={`${styles.name} ${isActive && styles.name__active}`}>{status.name}</span>
      <div className={`${styles.line} ${isActive && styles.line__active}`} />
    </li>
  );
};

export default WatchingStatusItem;
