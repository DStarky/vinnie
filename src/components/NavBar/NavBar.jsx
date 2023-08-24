import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { Phone, X } from 'lucide-react';

import styles from './NavBar.module.scss';
import menuElements from '../../data/navigation';


const NavBar = ({ isOpen, setOpen, isShow }) => {

  const isMoreThan1250 = useMediaQuery({ minWidth: 1250 })

  return (
    <nav className={styles.NavBar} onClick={() => setOpen(false)}>
      <ul className={isShow ? styles.NavigationMenu : styles.Navigation} style={isOpen ? { top: 0 } : {}}>
        {menuElements.map(({ id, title, link }) => {
          return <li key={id}>
            <NavLink className={({ isActive }) => isActive ? styles.Active : styles.Link} to={link}>{title}</NavLink>
          </li>
        })}
        {isMoreThan1250 && <div className={styles.Phone}>
          <Phone color='hsl(328, 92%, 47%)' />
          <a href="tel:+73532307536">+7 (3532) 30-75-36</a>
        </div>}
      </ul>
      {isShow && <X size={48} className={styles.X} style={isOpen ? { top: 10 + '%' } : {}} />}
    </nav>
  )
}
export default NavBar