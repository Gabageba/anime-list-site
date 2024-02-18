import { CONTENT_SIZE } from '@ui/ContentCenter/types';
import Form from '@ui/Form';
import ContentCenter from '../../ui/ContentCenter';
import styles from './Auth.module.scss';

const Auth = () => (
  <ContentCenter size={CONTENT_SIZE.CONTENT} className={styles.auth}>
    <div>
      <Form onSubmit={() => console.log('asd')}>sadfasffsad</Form>
    </div>
  </ContentCenter>
);

export default Auth;
