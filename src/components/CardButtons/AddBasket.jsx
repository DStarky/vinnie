import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LuPlus } from 'react-icons/lu';

import { addToBasket } from '../../redux/slices/basketSlice';
import styles from './CardButtons.module.scss';

const AddBasket = ({ name, image, price }) => {
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    setIsActive(true);
    dispatch(
      addToBasket({
        name,
        image,
        price,
      }),
    );
  };

  return (
    <button
      className={`${styles.Basket} ${isActive ? styles.Active : ''}`}
      onClick={handleClick}>
      <LuPlus size='24px' />
    </button>
  );
};
export default AddBasket;
