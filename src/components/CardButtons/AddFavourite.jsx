import { Heart } from 'lucide-react';
import styles from './CardButtons.module.scss';
import { useState } from 'react';

const AddFavourite = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
    className={`${styles.Favourite} ${isActive ? styles.Active : ''}`}
      onClick={() => setIsActive((prev) => !prev)}>
      
      <Heart />
    </button>
  );
};
export default AddFavourite;
