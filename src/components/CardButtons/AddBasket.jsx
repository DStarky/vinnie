import { Plus } from 'lucide-react';
import styles from './CardButtons.module.scss';
import { useState } from 'react';

const AddBasket = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={`${styles.Basket} ${isActive ? styles.Active : ''}`}
      onClick={() => setIsActive((prev) => !prev)}>
      <Plus />
    </button>
  );
};
export default AddBasket;
