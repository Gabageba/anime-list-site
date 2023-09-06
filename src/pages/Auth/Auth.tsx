import { Type } from '@customTypes/text.ts';
import Text from '@ui/Text/Text.tsx';
import ContentCenter from '@ui/ContentCenter/ContentCenter.tsx';
import styles from './Auth.module.scss';

const Auth = () => {
  return (
    <ContentCenter size="full" className={styles.auth}>
      <Text type={Type.TITLE} level={1} weight="semiBold">
        Велком ту Anime-list!
      </Text>
      <Text type={Type.TITLE} level={2}>
        Для того, чтобы воспользоваться всеми приколами, <br />
        <a href="">войдите с помощью Shikimory.</a>
      </Text>
    </ContentCenter>
  );
};

export default Auth;
