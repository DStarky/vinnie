import { useDispatch } from 'react-redux';
import { changeCount } from '../../redux/slices/basketSlice';
import styles from './ProductCount.module.scss';

type ProductCountProps = {
  count: number;
  id: number;
}


const ProductCount: React.FC<ProductCountProps> = ({ count, id }) => {
  const dispatch = useDispatch();

  const counterHandler = (sign: 'minus' | 'plus', id: number) => {
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
