import { LuShoppingBag } from 'react-icons/lu';

import styles from './Buttons.module.scss';

const BasketButton = ({ showText, notifications }) => {
  return (
    <button className={styles.Button}>
      {showText && <span className={styles.Text}>Корзина</span>}
      <LuShoppingBag size='24px' />
      {notifications && (
        <div className={styles.Notification}>{notifications}</div>
      )}
    </button>
  );
};
export default BasketButton;
