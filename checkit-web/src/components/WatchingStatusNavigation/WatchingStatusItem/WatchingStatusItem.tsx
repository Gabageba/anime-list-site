import type { Dispatch, FC, SetStateAction } from 'react';
import styles from './WatchingStatusItem.module.scss';
import type { IWatchingStatuses } from '../../../types/statuses';
import Text from '../../../ui/Text/Text';
import { Type } from '../../../types/text';

interface StatusItemProps {
  status: IWatchingStatuses;
  active: IWatchingStatuses;
  setActive: Dispatch<SetStateAction<IWatchingStatuses>>;
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
