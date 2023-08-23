import NavBar from '../NavBar/NavBar';
import HeaderButton from '../HeaderButton/HeaderButton';
import BurgerButton from '../BurgerButton/BurgerButton';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { Bell, Heart, Menu, ShoppingBag, User } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <header className={styles.Header} >
      <Link to="/" className={styles.Logo}>Винни-пух</Link>
      <NavBar isOpen={isMenuOpen} setOpen={setIsMenuOpen} />
      <div className={styles.Buttons}>
        <HeaderButton notifications={2}> <Bell className={styles.Icon} /></HeaderButton>
        <HeaderButton> <Heart className={styles.Icon} /></HeaderButton>
        <HeaderButton> <User className={styles.Icon} /></HeaderButton>
        <HeaderButton text="Корзина" > <ShoppingBag className={styles.Icon} /></HeaderButton>
        <BurgerButton setOpen={setIsMenuOpen}> <Menu /></BurgerButton>
      </div>
    </header>
  )
}
export default Header