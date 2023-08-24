import { Bell } from 'lucide-react';
import styles from './Buttons.module.scss';

const NotificationButton = (props) => {
  const { notifications } = props;
  return (
    <button className={styles.Button}>
      <Bell />
      {notifications && <div className={styles.Notification}>{notifications}</div>}
    </button>

  )

}
export default NotificationButton