import { useEffect } from 'react';
import styles from './Modal.module.scss';

const Modal = (props) => {
  const { notificationsTexts, modalPosition, modalRef, onClose } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className={styles.Modal}
      ref={modalRef}
      style={{ ...modalPosition }}>
      <ul>
        {notificationsTexts.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
};
export default Modal;
