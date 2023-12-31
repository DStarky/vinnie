import { Link } from 'react-router-dom';
import styles from './Card.module.scss';
import { AddFavourite, AddBasket } from '..';

type CardProps = {
	name: string;
	price: number;
	image: string;
	properties: string[];
	weight: string;
	description: string;
	slug: string;
	id: string;
};

const Card: React.FC<CardProps> = ({ name, price, image, properties, weight, description, slug, id }) => {
	return (
		<li className={styles.Card}>
			{properties && (
				<ul className={styles.Properties}>
					{properties.map((property, index) => {
						return (
							<li
								className={styles.Property}
								key={index}>
								{property}
							</li>
						);
					})}
				</ul>
			)}
			<Link
				to={`/production/${slug}`}
				relative='path'>
				<div className={styles.Cover}>
					<img
						className={styles.Image}
						src={image}
						alt={name}
					/>
				</div>
			</Link>
			<Link
				to={`/production/${slug}`}
				className={styles.Link}>
				<h3 className={styles.Name}>{name}</h3>
			</Link>
			<p className={styles.Weight}>Вес: {weight}</p>
			<p className={styles.Description}>{description}</p>
			<div className={styles.Bottom}>
				<p className={styles.Price}>
					<span>{price}</span> руб.
				</p>
				<AddFavourite />
				<AddBasket
					link={`/production/${slug}`}
					image={image}
					name={name}
					price={price}
					id={Number(id)}
					text={false}
				/>
			</div>
		</li>
	);
};
export default Card;
