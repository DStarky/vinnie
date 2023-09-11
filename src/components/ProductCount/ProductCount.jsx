import { useDispatch } from 'react-redux';
import { changeCount } from '../../redux/slices/basketSlice';
import styles from './ProductCount.module.scss';

const ProductCount = ({ count, name }) => {
  const dispatch = useDispatch();

  const counterHandler = (sign, name) => {
    dispatch(
      changeCount({
        sign,
        name,
      }),
    );
  };

  return (
    <div className={styles.Count}>
      <button
        className={count > 1 ? styles.Minus : styles.Disable}
        onClick={() => counterHandler('minus', name)}>
        -
      </button>
      <input
        type='number'
        value={count}
        className={styles.Input}
        readOnly></input>
      <button
        className={styles.Plus}
        onClick={() => counterHandler('plus', name)}>
        +
      </button>
    </div>
  );
};
export default ProductCount;
