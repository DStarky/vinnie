import styles from './News.module.scss';
import newsData from '../../data/news.json';

import { NewsTypes } from '../../@types/newsTypes';
import { AnotherNews } from '../../components';

const News: React.FC = () => {
	const news: NewsTypes[] = newsData;
	const sortedNews = news.sort((a, b) => Number(b.id) - Number(a.id));

	return (
		<ul className={styles.root}>
			{sortedNews.map(item => (
				<li
					className={styles.item}
					key={item.id}>
					<AnotherNews item={item} />
				</li>
			))}
		</ul>
	);
};

export default News;
