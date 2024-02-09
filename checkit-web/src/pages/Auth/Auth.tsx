import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '@hooks/redux.ts';
import { saveShikimoryAuthCodeToStorage } from '@store/reducers/auth/AuthActionCreator';
import { Type } from '../../types/text';
import Text from '../../ui/Text/Text';
import ContentCenter from '../../ui/ContentCenter/ContentCenter';
import styles from './Auth.module.scss';

const Auth = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const code = searchParams.get('code');

  useEffect(() => {
    console.log(code);
    if (code) {
      dispatch(saveShikimoryAuthCodeToStorage(code));
    }
  }, [code, dispatch]);

  return (
    <ContentCenter size="full" className={styles.auth}>
      <Text type={Type.TITLE} level={1} weight="semiBold">
        {t('welcomeCheckIt')}
      </Text>
      <Text type={Type.TITLE} level={2}>
        {t('authText')} <br />
        <a href={import.meta.env.VITE_SHIKIMORI_AUTH_LINK}>
          {t('enterWithShikimory')}
        </a>
      </Text>
    </ContentCenter>
  );
};

export default Auth;
