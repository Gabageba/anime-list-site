import MoreSvg from '@svg/MoreSvg.tsx';
import LogoSvg from '@svg/LogoSvg.tsx';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.more}>
        <MoreSvg />
      </div>
      <div className={styles.logo}>
        <LogoSvg />
      </div>
    </div>
  );
};

export default NavBar;
