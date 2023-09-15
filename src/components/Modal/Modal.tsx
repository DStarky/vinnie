import { useEffect } from 'react';
import styles from './Modal.module.scss';

type ModalProps = {
  notificationsTexts: string[];
  modalPosition: {
    top: number;
    left: number;
  };
  modalRef: React.RefObject<HTMLDivElement>;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({
  notificationsTexts,
  modalPosition,
  modalRef,
  onClose,
}) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
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
