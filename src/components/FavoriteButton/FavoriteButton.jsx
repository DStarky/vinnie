import { Heart } from 'lucide-react';
import styles from './FavoriteButton.module.scss';

const FavoriteButton = () => {
  return (
    <button className={styles.Button}>
      <Heart />
    </button>
  )
}
export default FavoriteButton