import { LuHeart } from 'react-icons/lu';
import styles from './CardButtons.module.scss';
import { useState } from 'react';

const AddFavourite = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
    className={`${styles.Favourite} ${isActive ? styles.Active : ''}`}
      onClick={() => setIsActive((prev) => !prev)}>
      
      <LuHeart size='24px'/>
    </button>
  );
};
export default AddFavourite;
