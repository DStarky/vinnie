import styles from './BasketProduct.module.scss';
import ProductCount from '../ProductCount/ProductCount';

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
        <p>
          Цена за штуку: <span className={styles.Price}>{price} ₽</span>
        </p>
      </div>
      <ProductCount count={count} name={name}/>
      <p className={styles.Total}>
        Итого: <span className={styles.Sum}>{price * count} ₽</span>
      </p>
    </div>
  );
};
export default BasketProduct;
