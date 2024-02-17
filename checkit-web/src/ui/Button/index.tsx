import type { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
// import type { Size } from '@ui/types';
import {
  // ButtonShape,
  ButtonStyle,
  ButtonType,
} from './types';
import styles from './styles.module.scss';

interface ButtonProps {
  type?: ButtonType;
  className?: string;
  style?: ButtonStyle;
  // isLoading?: boolean;
  isDanger?: boolean;
  // block?: boolean;
  // shape?: ButtonShape;
  // onClick?: () => void;
  // isDisabled?: boolean;
  // size?: Size;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  type = ButtonType.BUTTON,
  className,
  children,
  style = ButtonStyle.FILLED,
  isDanger = false,
  // isLoading = false,
  // block = false,
  // shape = ButtonShape.DEFAULT,
}) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    className={cn(styles[style], isDanger && styles.danger, className)}
  >
    {children}
  </button>
);

export default Button;
