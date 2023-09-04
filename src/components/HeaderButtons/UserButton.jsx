import { LuUser } from 'react-icons/lu';
import styles from './Buttons.module.scss';

const UserButton = () => {
  return (
    <button className={styles.Button}>
      <LuUser size='24px' />
    </button>
  );
};
export default UserButton;
