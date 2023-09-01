import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.Root}>
      <input
        className={styles.Input}
        placeholder='Найти вкусняшку ...'
      />
    </div>
  );
};
export default Search;
