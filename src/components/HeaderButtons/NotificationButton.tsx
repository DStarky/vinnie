import { useState, useRef, useEffect } from 'react';
import { LuBell } from 'react-icons/lu';
import Modal from '../Modal/Modal';
import styles from './Buttons.module.scss';
import notifications from '../../data/notifications.json';

const NotificationButton: React.FC = () => {
	const [notificationsCount, setNotificationsCount] = useState(0);
	const [notificationsTexts, setNotificationsTexts] = useState(notifications);
	const [isShow, setIsShow] = useState(false);
	const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

	const modalRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const updateNotifications = (count: number, texts: string[]) => {
		setNotificationsCount(count);
		setNotificationsTexts(texts);
		localStorage.setItem('notifications', JSON.stringify({ count, texts }));
	};

	useEffect(() => {
		// При загрузке компонента попробуйте прочитать данные из localStorage
		const storedNotifications = localStorage.getItem('notifications');
		if (storedNotifications) {
			const { count, texts } = JSON.parse(storedNotifications);
			setNotificationsCount(count);
			setNotificationsTexts(texts);
		} else {
			// Если данных в localStorage нет, используйте значения из notifications.json
			const initialCount = notifications.length;
			updateNotifications(initialCount, notifications);
		}

		// Устанавливаем начальную позицию модального окна
		if (buttonRef.current) {
			const buttonRect = buttonRef.current.getBoundingClientRect();
			const modalLeft = buttonRect.left;
			const modalTop = buttonRect.top + buttonRect.height;
			setModalPosition({ top: modalTop + 20, left: modalLeft });
		}
	}, []);

  
  function showModal() {
		setIsShow(prev => !prev);
	}

	function onClose() {
		setIsShow(false);
		updateNotifications(0, ['Уведомлений больше нет']);
	}

	return (
		<>
			<button
				className={styles.Button}
				onClick={showModal}
				ref={buttonRef}>
				<LuBell size='24px' />
				{notificationsCount > 0 && !isShow && <div className={styles.Notification}>{notificationsCount}</div>}
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
