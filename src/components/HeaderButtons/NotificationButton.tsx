import { useState, useRef, useEffect } from 'react';
import { LuBell } from 'react-icons/lu';
import Modal from '../Modal/Modal';
import styles from './Buttons.module.scss';
import notifications from '../../data/notifications.json';

const NotificationButton: React.FC = () => {
  const [notificationsCount, setNotificationsCount] = useState(
    notifications.length,
  );
  const [notificationsTexts, setNotificationsTexts] = useState(notifications);
  const [isShow, setIsShow] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const modalRef = useRef(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Устанавливаем начальную позицию модального окна
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const modalLeft = buttonRect.left;
      const modalTop = buttonRect.top + buttonRect.height;
      setModalPosition({ top: modalTop + 20, left: modalLeft });
    }
  }, []);

  function showModal() {
    setIsShow((prev) => !prev);
    setNotificationsCount(0);
  }

  function onClose() {
    setIsShow(false);
    setNotificationsTexts(['Уведомлений больше нет']);
  }

  return (
    <>
      <button
        className={styles.Button}
        onClick={showModal}
        ref={buttonRef}>
        <LuBell size='24px'/>
        {notificationsCount > 0 && !isShow && (
          <div className={styles.Notification}>{notificationsCount}</div>
        )}
      </button>
      {isShow && (
        <Modal
          notificationsTexts={notificationsTexts}
          modalRef={modalRef}
          modalPosition={modalPosition}
          onClose={onClose}
        />
      )}
    </>
  );
};
export default NotificationButton;
