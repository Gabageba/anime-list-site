import NavBar from '../NavBar/NavBar';
import styles from './Header.module.scss';
import WatchingStatusNavigation from '../WatchingStatusNavigation/WatchingStatusNavigation';

const Header = () => (
  <div className={styles.header}>
    <NavBar />
    <WatchingStatusNavigation />
  </div>
);

export default Header;
