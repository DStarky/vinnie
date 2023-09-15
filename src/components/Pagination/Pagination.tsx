import { useDispatch } from 'react-redux';
import { setActivePage } from '../../redux/slices/filterSlice';
import styles from './Pagination.module.scss';

type PaginationProps = {
  count: number;
  limit: number;
  activePage: number;
};

const Pagination: React.FC<PaginationProps> = ({
  count,
  limit,
  activePage,
}) => {
  const pageValue = Math.ceil(count / limit);
  const pages = new Array(pageValue).fill(null);

  const dispatch = useDispatch();

  return (
    <ul className={styles.root}>
      {pages.map((_, index) => (
        <li
          key={index}
          className={index === activePage - 1 ? styles.selected : ''}
          onClick={() => dispatch(setActivePage({ page: index + 1 }))}>
          {index + 1}
        </li>
      ))}
    </ul>
  );
};
export default Pagination;
