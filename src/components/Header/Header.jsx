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

  const isMoreThan769 = useMediaQuery({ minWidth: 769 })
  const isLessThan768 = useMediaQuery({ maxWidth: 768 })
  const isLessThan993 = useMediaQuery({ maxWidth: 993 })
  const isLessThan1100 = useMediaQuery({ maxWidth: 1100 })
  const isLessThan1200 = useMediaQuery({ maxWidth: 1200 })

  return (
    <header className={styles.Header} style={isLessThan768 ? { borderRadius: 0, marginBottom: 0 + 'rem' } : { marginBottom: 2 + 'rem' }}>
      <Link to="/" className={styles.Logo} style={isLessThan1200 ? isLessThan993 ? { fontSize: 2.4 + 'rem', marginRight: 1 + 'rem' } : { marginRight: 2.8 + 'rem' } : {}}>
        Винни-пух
      </Link>
      {<NavBar isOpen={isMenuOpen} setOpen={setIsMenuOpen} isShow={isLessThan1100} />}
      <div className={styles.Buttons} >
        {isMoreThan769 && <>
          <NotificationButton notifications={2} />
          <Link to="favourites"><FavoriteButton /></Link>
          <Link to="user-page"><UserButton /></Link>
        </>}

        <Link to="basket"><BasketButton showText={isMoreThan769} /></Link>
        {isLessThan1100 && <BurgerButton setOpen={setIsMenuOpen} />}
      </div>
    </header >
  )
}
export default Header