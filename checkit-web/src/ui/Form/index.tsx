import Button from '@ui/Button';
import { BUTTON_TYPE } from '@ui/Button/types';
import Flex from '@ui/Flex';
import type { FC, FormEvent, PropsWithChildren } from 'react';

export interface FormProps {
  onSubmit: () => any;
}

const Form: FC<PropsWithChildren<FormProps>> = ({ children, onSubmit }) => {
  const onOk = (event: FormEvent) => {
    event.preventDefault();

    onSubmit();
  };

  return (
    <form onSubmit={onOk}>
      {children}
      <Flex>
        <Button type={BUTTON_TYPE.SUBMIT}>asdf</Button>
        <button type="submit">asdf</button>
        <button type="button">asdf</button>
      </Flex>
    </form>
  );
};

export default Form;
