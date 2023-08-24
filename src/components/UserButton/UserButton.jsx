import { User } from 'lucide-react';
import styles from './UserButton.module.scss';

const UserButton = () => {
  return (
    <button className={styles.Button}>
      <User />
    </button>
  )
}
export default UserButton