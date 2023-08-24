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

  const isMoreThan768 = useMediaQuery({ minWidth: 768 })
  const isLessThan993 = useMediaQuery({ maxWidth: 993 })
  const isLessThan1100 = useMediaQuery({ maxWidth: 1100 })
  const isLessThan1200 = useMediaQuery({ maxWidth: 1200 })

  return (
    <header className={styles.Header} >
      <Link to="/" className={styles.Logo} style={isLessThan1200 ? isLessThan993 ? { fontSize: 2.4 + 'rem', marginRight: 1 + 'rem' } : { marginRight: 2.8 + 'rem' } : {}}>
        Винни-пух
      </Link>
      {<NavBar isOpen={isMenuOpen} setOpen={setIsMenuOpen} isShow={isLessThan1100} />}
      <div className={styles.Buttons} >
        {isMoreThan768 && <>
          <NotificationButton notifications={2} />
          <FavoriteButton />
          <UserButton />
        </>}

        <BasketButton showText={isMoreThan768} />
        {isLessThan1100 && <BurgerButton setOpen={setIsMenuOpen} />}
      </div>
    </header>
  )
}
export default Header