import { ShoppingBag } from 'lucide-react';

import styles from './Buttons.module.scss';

const BasketButton = () => {
  return (
    <button className={styles.Button}>
      <span className={styles.Text}>Корзина</span> <ShoppingBag />
    </button>
  )
}
export default BasketButton