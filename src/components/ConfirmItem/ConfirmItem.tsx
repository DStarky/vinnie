import styles from './ConfirmItem.module.scss';
import { Product } from '../../redux/slices/basketSlice';

const ConfirmItem: React.FC<Product> = ({ image, name, price, count }) => {
	return (
		<>
			<div className={styles.grid}>
				<div className={styles.cover}>
					<img
						src={image}
						alt={name}
						className={styles.image}
					/>
				</div>
				<div className={styles.text}>
					<h3>{name}</h3>
				</div>
				<p className={styles.count}>{count} шт.</p>
				<p className={styles.total}>
					Итого: <span className={styles.sum}>{count ? price * count : '0'} ₽</span>
				</p>
			</div>

		</>
	);
};
export default ConfirmItem;
