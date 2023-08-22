import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.Navigation}>
        <li><NavLink className={({ isActive }) => isActive ? styles.Active : ''} to="/">Главная</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? styles.Active : ''} to="delivery">Доставка</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? styles.Active : ''} to="about-us">О нас</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? styles.Active : ''} to="news">Новости</NavLink></li>
      </ul>
    </nav>
  )
}
export default NavBar