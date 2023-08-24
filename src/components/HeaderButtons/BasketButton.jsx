import { ShoppingBag } from 'lucide-react';

import styles from './Buttons.module.scss';

const BasketButton = () => {
  return (
    <button className={styles.Button}>
      <ShoppingBag />
    </button>
  )
}
export default BasketButton