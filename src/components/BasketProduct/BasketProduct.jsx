import styles from './BasketProduct.module.scss';
import ProductCount from '../ProductCount/ProductCount';
import { Link } from 'react-router-dom';

const BasketProduct = ({ count, image, name, price, id, link }) => {
  return (
    <div className={styles.Root}>
      <div className={styles.Cover}>
        <Link to={link}>
          <img
            src={image}
            alt={name}
            className={styles.Image}
          />
        </Link>
      </div>
      <div className={styles.Text}>
        <h3>{name}</h3>
        <p>
          Цена за штуку: <span className={styles.Price}>{price} ₽</span>
        </p>
      </div>
      <ProductCount
        count={count}
        id={id}
      />
      <p className={styles.Total}>
        Итого: <span className={styles.Sum}>{price * count} ₽</span>
      </p>
    </div>
  );
};
export default BasketProduct;
