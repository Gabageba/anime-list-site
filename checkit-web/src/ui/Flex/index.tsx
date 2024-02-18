import type { Align, Justify } from '@ui/types';
import { ALIGN, JUSTIFY } from '@ui/types';
import type { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface FlexProps {
  align?: Align;
  justify?: Justify;
}

const Flex: FC<PropsWithChildren<FlexProps>> = ({
  children,
  align = ALIGN.BASELINE,
  justify = JUSTIFY.BASELINE,
}) => (
  <div className={cn(styles.flex, styles[align], styles[justify])}>
    {children}
  </div>
);

export default Flex;
