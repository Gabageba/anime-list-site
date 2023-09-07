import { Type } from '@customTypes/text.ts';
import Text from '@ui/Text/Text.tsx';
import ContentCenter from '@ui/ContentCenter/ContentCenter.tsx';
import styles from './Auth.module.scss';
import { useTranslation } from 'react-i18next';

const Auth = () => {
  const { t } = useTranslation();
  return (
    <ContentCenter size="full" className={styles.auth}>
      <Text type={Type.TITLE} level={1} weight="semiBold">
        {t('welcome')}
      </Text>
      <Text type={Type.TITLE} level={2}>
        {t('authText')} <br />
        <a href={import.meta.env.VITE_AUTH_LINK}>{t('enterWithShikimory')}</a>
      </Text>
    </ContentCenter>
  );
};

export default Auth;
