import { Heart } from 'lucide-react';
import styles from './CardButtons.module.scss';

const AddFavourite = () => {
  return (
    <div className={styles.Favourite}>
      <Heart />
    </div>
  );
};
export default AddFavourite;
