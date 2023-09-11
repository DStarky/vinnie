import styles from './BasketProduct.module.scss';
import BasketProductCounter from '../BasketProductCounter/BasketProductCounter';

const BasketProduct = ({ count, image, name, price }) => {
  return (
    <div className={styles.Root}>
      <div className={styles.Cover}>
        <img
          src={image}
          alt={name}
          className={styles.Image}
        />
      </div>
      <div className={styles.Text}>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
      <BasketProductCounter />
      <p className={styles.Total}>Итого: <span className={styles.Sum}>{price * 2}</span></p>
    </div>
  );
};
export default BasketProduct;
