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
        <button type="submit">asdf</button>
        <button type="button">asdf</button>
      </Flex>
    </form>
  );
};

export default Form;
