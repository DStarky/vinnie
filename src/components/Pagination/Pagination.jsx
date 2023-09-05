import styles from './Pagination.module.scss';

const Pagination = (props) => {
  const { count, limit, activePage, setActivePage } = props;
  const pageValue = Math.ceil(count / limit);
  const pages = new Array(pageValue).fill(null);

  return (
    <ul className={styles.root}>
      {pages.map((_, index) => (
        <li
          key={index}
          className={index === activePage - 1 ? styles.selected : ''}
          onClick={() => setActivePage(index + 1)}>
          {index + 1}
        </li>
      ))}
    </ul>
  );
};
export default Pagination;
