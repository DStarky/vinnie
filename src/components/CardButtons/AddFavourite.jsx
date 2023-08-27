import { Heart } from 'lucide-react';
import styles from './CardButtons.module.scss';

const AddFavourite = () => {
  return (
    <button className={styles.Favourite}>
      <Heart />
    </button>
  );
};
export default AddFavourite;
