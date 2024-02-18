import type { Dispatch, FC, SetStateAction } from 'react';
import { TEXT_STYLE, TEXT_TYPE } from '@ui/Text/types';
import { FONT_WEIGHT } from '@ui/types';
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
        type={TEXT_TYPE.TEXT}
        weight={FONT_WEIGHT.SEMI_BOLD}
        style={isActive ? TEXT_STYLE.DEFAULT : TEXT_STYLE.SECONDARY}
        className={styles.name}
      >
        {status.name}
      </Text>
      <div className={`${styles.line} ${isActive && styles.line__active}`} />
    </li>
  );
};

export default WatchingStatusItem;
