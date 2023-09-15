import { useSelector } from 'react-redux';
import { LuShoppingBag } from 'react-icons/lu';

import styles from './Buttons.module.scss';
import { selectBasket } from '../../redux/slices/basketSlice';

const BasketButton: React.FC<{showText: boolean }> = ({ showText }) => {
  const totalCountInBasket = useSelector(selectBasket).totalCount;

  return (
    <button className={styles.Button}>
      {showText && <span className={styles.Text}>Корзина</span>}
      <LuShoppingBag size='24px' />
      {totalCountInBasket > 0 && (
        <div className={styles.Notification}>{totalCountInBasket}</div>
      )}
    </button>
  );
};
export default BasketButton;
