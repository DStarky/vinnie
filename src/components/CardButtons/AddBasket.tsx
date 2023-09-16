import { useDispatch, useSelector } from 'react-redux';
import { LuPlus } from 'react-icons/lu';

import { addToBasket, selectBasket } from '../../redux/slices/basketSlice';
import styles from './CardButtons.module.scss';

type AddBasketProps = {
  name: string;
  image: string;
  price: number;
  id: number;
  link: string;
  text: boolean;
};

const AddBasket: React.FC<AddBasketProps> = ({
  name,
  image,
  price,
  id,
  link,
  text,
}) => {
  const dispatch = useDispatch();

  const productsInBasket = useSelector(selectBasket).products;
  const elementInBasket = productsInBasket.find(
    (el: { id: number }) => el.id === id,
  );

  const handleClick = () => {
    dispatch(
      addToBasket({
        name,
        image,
        price,
        id,
        link,
        count: 0
      }),
    );
  };

  return (
    <button
      className={`${styles.Basket} ${elementInBasket && styles.Active}`}
      onClick={handleClick}>
      {text ? 'Добавить в корзину' : <LuPlus size='24px' />}
      {elementInBasket && (
        <span className={styles.Count}>{elementInBasket.count}</span>
      )}
    </button>
  );
};
export default AddBasket;
