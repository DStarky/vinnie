import { Menu } from 'lucide-react';
import styles from './BurgerButton.module.scss';

const BurgerButton = (props) => {
  const { setOpen } = props;
  
  return (
    <button className={styles.Button} onClick={() => setOpen(true)}>
      <Menu />
    </button>
  )
}
export default BurgerButton