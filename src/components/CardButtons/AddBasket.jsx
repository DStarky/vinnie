import { Plus } from 'lucide-react';
import styles from './CardButtons.module.scss';
import { useState } from 'react';

const AddBasket = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={styles.Basket}
      style={
        isActive
          ? {
              backgroundColor: 'white',
              outline: '1px solid hsl(328, 92%, 47%)',
              color: 'hsl(328, 92%, 47%)',
            }
          : {}
      }
      onClick={() => setIsActive(true)}>
      <Plus />
    </button>
  );
};
export default AddBasket;
