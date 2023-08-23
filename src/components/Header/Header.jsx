import NavBar from '../NavBar/NavBar';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className={styles.Header}>
      <Link to="/" className={styles.Logo}>Винни-пух</Link>
      <NavBar />

    </header>
  )
}
export default Header