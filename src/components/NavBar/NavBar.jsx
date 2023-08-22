import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.Navigation}>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="delivery">Доставка</Link></li>
        <li><Link to="about-us">О нас</Link></li>
        <li><Link to="news">Новости</Link></li>
      </ul>
    </nav>
  )
}
export default NavBar