import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import { setCategoryIndex } from '../../redux/slices/filterSlice';
import styles from './Categories.module.scss';
import { memo } from 'react';

type CategoriesProps = {
  categories: {
    name: string;
    request: string;
  }[];
  activeIndex: number;
};

const Categories: React.FC<CategoriesProps> = memo(({ categories, activeIndex }) => {
  const dispath = useDispatch();

  const isMoreThan769 = useMediaQuery({ minWidth: 769 });

  return (
    <ul
      className={styles.Parent}
      style={isMoreThan769 ? { margin: '2.4rem 0' } : { margin: '1.2rem' }}>
      {categories.map((category, index) => {
        return (
          <li
            key={index}
            className={`${styles.Category} ${activeIndex === index ? styles.ActiveCategory : ''}`}
            onClick={() => dispath(setCategoryIndex({ index }))}>
            {category.name}
          </li>
        );
      })}
    </ul>
  );
});
export default Categories;
