import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import NavBar from '../NavBar/NavBar';
import NotificationButton from '../HeaderButtons/NotificationButton';
import FavoriteButton from '../HeaderButtons/FavoriteButton';
import UserButton from '../HeaderButtons/UserButton';
import BasketButton from '../HeaderButtons/BasketButton';
import BurgerButton from '../HeaderButtons/BurgerButton';

import styles from './Header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLessThan993 = useMediaQuery({ maxWidth: 993 })
  const isLessThan1200 = useMediaQuery({ maxWidth: 1200 })

  return (
    <header className={styles.Header} >
      <Link to="/" className={styles.Logo} style={isLessThan1200 ? { marginRight: 2.8 + 'rem' } : {}}>Винни-пух</Link>
      {<NavBar isOpen={isMenuOpen} setOpen={setIsMenuOpen} isShow={isLessThan993} />}
      <div className={styles.Buttons}>
        <NotificationButton notifications={2} />
        <FavoriteButton />
        <UserButton />
        <BasketButton />
        {isLessThan993 && <BurgerButton setOpen={setIsMenuOpen} />}
      </div>
    </header>
  )
}
export default Header