import { ShoppingBag } from 'lucide-react';

import styles from './Buttons.module.scss';

const BasketButton = ({ showText, notifications }) => {
  return (
    <button className={styles.Button}>
      {showText && <span className={styles.Text}>Корзина</span>}<ShoppingBag />
      {notifications && <div className={styles.Notification}>{notifications}</div>}
    </button>
  )
}
export default BasketButton