import { useMediaQuery } from 'react-responsive';

import { Button } from '..';
import styles from './SingleSlide.module.scss';
import { Link } from 'react-router-dom';

type SingleSlideProps = {
	title: string;
	text: string;
	buttonText: string;
	imageWide: string;
	imageSmall: string;
	linkTo: string;
};

const SingleSlide: React.FC<SingleSlideProps> = ({ title, text, buttonText, imageWide, imageSmall, linkTo }) => {
	const isMoreThan769 = useMediaQuery({
		minWidth: 769,
	});

	return (
		<div className={styles.SingleSlide}>
			{isMoreThan769 && (
				<div className={styles.Content}>
					<h1 className={styles.Title}>{title}</h1>
					<p className={styles.Text}>{text}</p>
					<Link to={linkTo}>
						<Button text={buttonText} />
					</Link>
				</div>
			)}
			<div className={styles.Cover}>
				{isMoreThan769 ? (
					<img
						src={imageWide}
						className={styles.Image}
						alt={title.toLowerCase()}
					/>
				) : (
					<Link to={linkTo}>
						<img
							src={imageSmall}
							className={styles.Image}
							alt={title.toLowerCase()}
						/>
					</Link>
				)}
			</div>
		</div>
	);
};

export default SingleSlide;
