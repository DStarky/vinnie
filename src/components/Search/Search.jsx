import styles from './Search.module.scss';
import debounce from 'lodash.debounce';

const Search = (props) => {
  const { searchValue, setSearchValue } = props;

  return (
    <div className={styles.Root}>
      <input
        className={styles.Input}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder='Найти вкусняшку ...'
      />
    </div>
  );
};
export default Search;
