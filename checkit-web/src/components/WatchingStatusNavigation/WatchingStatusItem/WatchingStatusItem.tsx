import type { Dispatch, FC, SetStateAction } from 'react';
import { TextStyle, TextType } from '@ui/Text/types';
import { FontWeight } from '@ui/types';
import styles from './WatchingStatusItem.module.scss';
import type { IWatchingStatuses } from '../../../types/statuses';
import Text from '../../../ui/Text';

interface StatusItemProps {
  status: IWatchingStatuses;
  active: IWatchingStatuses;
  setActive: Dispatch<SetStateAction<IWatchingStatuses>>;
}

const WatchingStatusItem: FC<StatusItemProps> = ({
  status,
  active,
  setActive,
}) => {
  const isActive = active.id === status.id;
  return (
    <li onClick={() => setActive(status)}>
      <Text
        type={TextType.TEXT}
        weight={FontWeight.SEMI_BOLD}
        style={isActive ? TextStyle.DEFAULT : TextStyle.SECONDARY}
        className={styles.name}
      >
        {status.name}
      </Text>
      <div className={`${styles.line} ${isActive && styles.line__active}`} />
    </li>
  );
};

export default WatchingStatusItem;
