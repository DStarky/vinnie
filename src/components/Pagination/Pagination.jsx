import { useDispatch, useSelector } from 'react-redux';
import { setActivePage } from '../../redux/slices/filterSlice';
import styles from './Pagination.module.scss';

const Pagination = (props) => {
  const { count, limit } = props;
  const pageValue = Math.ceil(count / limit);
  const pages = new Array(pageValue).fill(null);

  const activePage = useSelector((state) => state.filter.activePage);
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
