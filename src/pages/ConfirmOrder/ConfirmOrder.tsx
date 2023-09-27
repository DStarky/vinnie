import styles from './ConfirmOrder.module.scss';
import { FormValues } from '../Order/Order';
import { useSelector } from 'react-redux';
import { Product, selectBasket } from '../../redux/slices/basketSlice';
import { ConfirmItem } from '../../components';
import { useNavigate } from 'react-router-dom';

type ConfirmOrderProps = {
	userData: FormValues;
};

const ConfirmOrder: React.FC<ConfirmOrderProps> = ({ userData }) => {
	const navigate = useNavigate();
	const productsInBasket = useSelector(selectBasket).products;

	const buttonNoHandler = () => {
		navigate('/basket');
	};
	const buttonYesHandler = () => {
		navigate('/success');
	};

	return (
		<div className={styles.order}>
			<h2>Подтвердите заказ:</h2>
			<div className={styles.confirm}>
				<div className={styles.details}>
					<h3 className={styles.blockTitle}>Детали доставки</h3>
					<p>
						<strong>Ваше имя: </strong> {userData.firstName}
					</p>
					<p>
						<strong>Ваша фамилия: </strong> {userData.lastName || 'не указана'}
					</p>
					<p>
						<strong>Ваш телефон: </strong> {userData.phone}
					</p>
					<p>
						<strong>Ваше email: </strong> {userData.email || 'не указан'}
					</p>
					<p>
						<strong>Ваш адрес: </strong> {userData.adress}
					</p>
				</div>

				<div className={styles.products}>
					<h3 className={styles.blockTitle}>Ваши товары:</h3>
					<ul className={styles.list}>
						{productsInBasket.map((el: Product) => {
							return (
								<li
									key={el.id}
									className={styles.item}>
									<ConfirmItem {...el} />
								</li>
							);
						})}
					</ul>
				</div>

				<div className={styles.buttons}>
					<button
						className={styles.buttonYes}
						onClick={buttonYesHandler}>
						Все верно
					</button>
					<button
						className={styles.buttonNo}
						onClick={buttonNoHandler}>
						Вернуться в корзину
					</button>
				</div>
			</div>
		</div>
	);
};
export default ConfirmOrder;
