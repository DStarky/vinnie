import styles from './ProductCount.module.scss';

const ProductCount = (props) => {
  const {count, setCount} = props;

  return (
    <div className={styles.Count}>
      <button className={count > 1 ? styles.Minus : styles.Disable} onClick={() => setCount(prev => prev - 1)}>-</button>
      <input
        type='number'
        value={count}
        className={styles.Input}
        onChange={(e) => setCount(Number(e.target.value))}
        ></input>
      <button className={styles.Plus} onClick={() => setCount(prev => prev + 1)}>+</button>
    </div>
  );
};
export default ProductCount;
