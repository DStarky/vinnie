import { useState, useRef, useEffect } from 'react';
import { Bell } from 'lucide-react';
import styles from './Buttons.module.scss';

const NotificationButton = (props) => {
  const { notifications } = props;
  const [notificationsCount, setNotificationsCount] = useState(notifications);
  const [isShow, setIsShow] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  console.log(modalPosition)

  const modalRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const buttonRect = buttonRef.current.getBoundingClientRect();

    const modalLeft = buttonRect.left;
    const modalTop = buttonRect.top + buttonRect.height;

    setModalPosition({ top: modalTop + 20, left: modalLeft });
  }, []);

  function showModal() {
    setIsShow((prev) => !prev);
    setNotificationsCount(0);
  }

  return (
    <>
      <button
        className={styles.Button}
        onClick={showModal}
        ref={buttonRef}>
        <Bell />
        {notificationsCount > 0 && !isShow && (
          <div className={styles.Notification}>{notifications}</div>
        )}
      </button>
      {isShow && (
        <div
          className={styles.Modal}
          ref={modalRef}
          style={{ ...modalPosition }}>
          <ul>
            <li>Бесплатная доставка до конца месяца</li>
            <li>Посетите наши уютные кафе</li>
          </ul>
        </div>
      )}
    </>
  );
};
export default NotificationButton;
