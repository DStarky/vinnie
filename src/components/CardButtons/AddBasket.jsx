import { useDispatch, useSelector } from 'react-redux';
import { LuPlus } from 'react-icons/lu';

import { addToBasket, selectBasket } from '../../redux/slices/basketSlice';
import styles from './CardButtons.module.scss';

const AddBasket = ({ name, image, price, id, link }) => {
  const dispatch = useDispatch();

  const productsInBasket = useSelector(selectBasket).products;
  const elementInBasket = productsInBasket.find((el) => el.id === id);

  const handleClick = () => {
    dispatch(
      addToBasket({
        name,
        image,
        price,
        id,
        link,
      }),
    );
  };

  return (
    <button
      className={`${styles.Basket} ${elementInBasket && styles.Active}`}
      onClick={handleClick}>
      <LuPlus size='24px' />
      {elementInBasket && (
        <span className={styles.Count}>{elementInBasket.count}</span>
      )}
    </button>
  );
};
export default AddBasket;
