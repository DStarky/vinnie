import { LuPlus } from 'react-icons/lu';
import styles from './CardButtons.module.scss';
import { useState } from 'react';

const AddBasket = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={`${styles.Basket} ${isActive ? styles.Active : ''}`}
      onClick={() => setIsActive((prev) => !prev)}>
      <LuPlus size='24px'/>
    </button>
  );
};
export default AddBasket;
