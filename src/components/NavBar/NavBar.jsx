import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { LuPhone, LuX } from 'react-icons/lu';

import styles from './NavBar.module.scss';
import menuElements from '../../data/navigation';

const NavBar = ({ isOpen, setOpen, isShow }) => {
  const isMoreThan1300 = useMediaQuery({ minWidth: 1300 });

  return (
    <nav
      className={styles.NavBar}
      onClick={() => setOpen(false)}>
      <ul
        className={isShow ? styles.NavigationMenu : styles.Navigation}
        style={isOpen ? { top: 0 } : {}}>
        {menuElements.map(({ id, title, link }) => {
          return (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.Active : styles.Link
                }
                to={link}>
                {title}
              </NavLink>
            </li>
          );
        })}
        {isMoreThan1300 && (
          <div className={styles.Phone}>
            <LuPhone color='hsl(328, 92%, 47%)' />
            <a href='tel:+73532307536'>+7 (3532) 30-75-36</a>
          </div>
        )}
      </ul>
      {isShow && (
        <LuX
          size={48}
          className={styles.X}
          style={isOpen ? { top: 10 + '%' } : {}}
        />
      )}
    </nav>
  );
};
export default NavBar;
