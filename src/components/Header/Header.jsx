import styles from './Header.module.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import NavBar from '../NavBar/NavBar';
import NotificationButton from '../HeaderButtons/NotificationButton';
import FavoriteButton from '../HeaderButtons/FavoriteButton';
import UserButton from '../HeaderButtons/UserButton';
import BasketButton from '../HeaderButtons/BasketButton';
import BurgerButton from '../HeaderButtons/BurgerButton';


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