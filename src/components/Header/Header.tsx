import NavBar from '@components/NavBar/NavBar.tsx';
import styles from './Header.module.scss';
import WatchingStatusNavigation from '@components/WatchingStatusNavigation/WatchingStatusNavigation.tsx';

const Header = () => {
  return (
    <div className={styles.header}>
      <NavBar />
      <WatchingStatusNavigation />
    </div>
  );
};

export default Header;
