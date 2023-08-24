import styles from './Header.module.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import NavBar from '../NavBar/NavBar';
import NotificationButton from '../NotificationButton/NotificationButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import UserButton from '../UserButton/UserButton';
import BasketButton from '../BasketButton/BasketButton';
import BurgerButton from '../BurgerButton/BurgerButton';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
    <header className={styles.Header} >
      <Link to="/" className={styles.Logo}>Винни-пух</Link>
      <NavBar isOpen={isMenuOpen} setOpen={setIsMenuOpen} />
      <div className={styles.Buttons}>
        <NotificationButton notifications={2} />
        <FavoriteButton />
        <UserButton />
        <BasketButton />
        <BurgerButton setOpen={setIsMenuOpen} />
      </div>
    </header>
  )
}
export default Header