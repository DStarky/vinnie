import styles from './Success.module.scss';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

const Success = () => {
	const { width, height } = useWindowSize();

	return (
		<>
			<Confetti
				width={width}
				height={height}
				numberOfPieces={1500}
				gravity={0.3}
				recycle={false}
			/>
			<div className={styles.root}>
				<h2>Ваш заказ успешно оформлен!</h2>
				<img
					src='images/order.jpg'
					alt='Заказ успешно оформлен'
					className={styles.image}
				/>
				<p>Скоро наш оператор позвонит вам для уточнения деталей. Спасибо!</p>
			</div>
		</>
	);
};
export default Success;
