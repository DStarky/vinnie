import { LuHeart } from 'react-icons/lu';
import styles from './Buttons.module.scss';

const FavoriteButton = () => {
  return (
    <button className={styles.Button}>
      <LuHeart size='24px'/>
    </button>
  )
}
export default FavoriteButton