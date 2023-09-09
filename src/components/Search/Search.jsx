import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
import debounce from 'lodash.debounce';
import styles from './Search.module.scss';

const Search = ({ searchValue }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.Root}>
      <input
        className={styles.Input}
        value={searchValue}
        onChange={(e) => dispatch(setSearchValue({ text: e.target.value }))}
        placeholder='Найти вкусняшку ...'
      />
    </div>
  );
};
export default Search;
