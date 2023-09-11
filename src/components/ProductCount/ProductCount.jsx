import { useDispatch } from 'react-redux';
import { changeCount } from '../../redux/slices/basketSlice';
import styles from './ProductCount.module.scss';

const ProductCount = ({ count, id }) => {
  const dispatch = useDispatch();

  const counterHandler = (sign, id) => {
    dispatch(
      changeCount({
        sign,
        id,
      }),
    );
  };

  return (
    <div className={styles.Count}>
      <button
        className={styles.Minus}
        onClick={() => counterHandler('minus', id)}>
        -
      </button>
      <input
        type='number'
        value={count}
        className={styles.Input}
        readOnly></input>
      <button
        className={styles.Plus}
        onClick={() => counterHandler('plus', id)}>
        +
      </button>
    </div>
  );
};
export default ProductCount;
