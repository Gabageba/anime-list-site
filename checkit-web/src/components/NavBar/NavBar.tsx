import MoreSvg from '../../svg/MoreSvg';
import LogoSvg from '../../svg/LogoSvg';
import styles from './NavBar.module.scss';

const NavBar = () => (
  <div className={styles.navBar}>
    <div className={styles.more}>
      <MoreSvg />
    </div>
    <div className={styles.logo}>
      <LogoSvg />
    </div>
  </div>
);

export default NavBar;
