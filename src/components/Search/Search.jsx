import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
import debounce from 'lodash.debounce';
import styles from './Search.module.scss';
import { useCallback } from 'react';
import { useState } from 'react';

const Search = ({ searchValue }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue({ text: str }));
    }, 250),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.Root}>
      <input
        className={styles.Input}
        value={value}
        onChange={onChangeInput}
        placeholder='Найти вкусняшку ...'
      />
    </div>
  );
};
export default Search;
