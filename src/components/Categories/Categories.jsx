import { useMediaQuery } from 'react-responsive';
import styles from './Categories.module.scss';

const Categories = (props) => {
  const { categories, activeIndex, setActiveIndex } = props;

  const isMoreThan769 = useMediaQuery({ minWidth: 769 });

  return (
    <ul
      className={styles.Parent}
      style={isMoreThan769 ? { margin: '2.4rem 0' } : { margin: '1.2rem' }}>
      {categories.map((category, index) => {
        return (
          <li
            key={index}
            className={`${styles.Category} ${
              activeIndex === index ? styles.ActiveCategory : ''
            }`}
            onClick={() => setActiveIndex(index)}>
            {category}
          </li>
        );
      })}
    </ul>
  );
};
export default Categories;
