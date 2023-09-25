import styles from './AnotherNews.module.scss';
import { NewsTypes } from '../../@types/newsTypes';

type AnotherNewsProps = {
	item: NewsTypes;
};

const AnotherNews: React.FC<AnotherNewsProps> = ({ item }) => {
	return (
		<article className={styles.root}>
			<h3 className={styles.title}>{item.title}</h3>
			<p className={styles.content}>{item.content}</p>
			<p className={styles.date}>{item.date}</p>
		</article>
	);
};
export default AnotherNews;
