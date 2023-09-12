import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

import {
  setSearchBeforeDebounce,
  setSearchValue,
} from '../../redux/slices/filterSlice';
import styles from './Search.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  const { searchBeforeDebounce } = useSelector((state) => state.filter);

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue({ text: str }));
    }, 250),
    [],
  );

  const onChangeInput = (event) => {
    dispatch(
      setSearchBeforeDebounce({
        text: event.target.value,
      }),
    );
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.Root}>
      <input
        className={styles.Input}
        value={searchBeforeDebounce}
        onChange={onChangeInput}
        placeholder='Найти вкусняшку ...'
      />
    </div>
  );
};
export default Search;
