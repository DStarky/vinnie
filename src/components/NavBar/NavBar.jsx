import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import menuElements from '../../data/navigation';
import { Phone, X } from 'lucide-react';


const NavBar = ({ isOpen, setOpen }) => {
  return (
    <nav className={styles.NavBar} onClick={() => setOpen(false)}>
      <ul className={styles.Navigation} style={isOpen ? { top: 0 } : {}}>
        {menuElements.map(({ id, title, link }) => {
          return <li key={id}>
            <NavLink className={({ isActive }) => isActive ? styles.Active : styles.Link} to={link}>{title}</NavLink>
          </li>
        })}
        <div className={styles.Phone}>
          <Phone color='hsl(328, 92%, 47%)' />
          <a href="tel:+73532307536">+7 (3532) 30-75-36</a>
        </div>
      </ul>
      <X size={48} className={styles.X} style={isOpen ? { display: 'block' } : {}} />
    </nav>
  )
}
export default NavBar