import { Card, Skeleton, FetchError } from '..';

import styles from './Production.module.scss';

type Cake = {
	name: string;
	price: number;
	image: string;
	properties: string[];
	weight: string;
	description: string;
	slug: string;
	id: string;
};

type ProductionProps = {
	cakes: Cake[];
	status: 'loading' | 'success' | 'error';
};

const Production: React.FC<ProductionProps> = ({ cakes, status }) => {
	return (
		<ul className={styles.Production}>
			{status === 'loading' ? (
				[...Array(4)].map((_, index) => {
					return <Skeleton key={index} />;
				})
			) : status === 'error' ? (
				<FetchError />
			) : (
				cakes.map(cake => {
					return (
						<Card
							{...cake}
							key={cake.id}
						/>
					);
				})
			)}
		</ul>
	);
};
export default Production;
