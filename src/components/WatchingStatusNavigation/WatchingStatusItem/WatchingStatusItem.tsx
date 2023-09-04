import type { Dispatch, FC, SetStateAction } from 'react';
import styles from './WatchingStatusItem.module.scss';
import type { WatchingStatuses } from '@customTypes/statuses.ts';
import Text from '@components/Text/Text.tsx';
import { Type } from '@customTypes/text.ts';

interface StatusItemProps {
  status: WatchingStatuses;
  active: WatchingStatuses;
  setActive: Dispatch<SetStateAction<WatchingStatuses>>;
}

const WatchingStatusItem: FC<StatusItemProps> = ({ status, active, setActive }) => {
  const isActive = active.id === status.id;
  return (
    <li onClick={() => setActive(status)}>
      <Text
        type={Type.TEXT}
        weight="semiBold"
        style={isActive ? 'default' : 'secondary'}
        className={styles.name}
      >
        {status.name}
      </Text>
      <div className={`${styles.line} ${isActive && styles.line__active}`} />
    </li>
  );
};

export default WatchingStatusItem;
