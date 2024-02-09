import { useState } from 'react';
import { WATCHING_STATUSES } from '@utils/const.ts';
import styles from './WatchingStatusNavigation.module.scss';
import WatchingStatusItem from './WatchingStatusItem/WatchingStatusItem';
import type { IWatchingStatuses } from '../../types/statuses';

const WatchingStatusNavigation = () => {
  const [active, setActive] = useState<IWatchingStatuses>(WATCHING_STATUSES[0]);

  return (
    <ul className={styles.status}>
      {WATCHING_STATUSES.map((status) => (
        <WatchingStatusItem
          status={status}
          active={active}
          setActive={setActive}
          key={status.id}
        />
      ))}
    </ul>
  );
};

export default WatchingStatusNavigation;
