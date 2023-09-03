import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import NavBar from '../NavBar/NavBar';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <Link
        to='/'
        className={styles.Logo}>
        Винни-пух
      </Link>
      <div className={styles.Navigation}>
        <NavBar />
      </div>
      <div className={styles.Checkout}>123</div>
      <div className={styles.Worktime}>321</div>
      <div className={styles.Social}>231</div>
    </div>
  );
};
export default Footer;
