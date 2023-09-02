import styles from './WatchingStatusNavigation.module.scss';
import WatchingStatusItem from '@components/WatchingStatusNavigation/WatchingStatusItem/WatchingStatusItem.tsx';
import { useState } from 'react';
import { WATCHING_STATUSES } from '../../utils/const.ts';
import type { WatchingStatuses } from '@customTypes/statuses.ts';

const WatchingStatusNavigation = () => {
  const [active, setActive] = useState<WatchingStatuses>(WATCHING_STATUSES[0]);

  return (
    <ul className={styles.status}>
      {WATCHING_STATUSES.map((status) => {
        return (
          <WatchingStatusItem
            status={status}
            active={active}
            setActive={setActive}
            key={status.id}
          />
        );
      })}
    </ul>
  );
};

export default WatchingStatusNavigation;
