import styles from './BasketProduct.module.scss';
import ProductCount from '../ProductCount/ProductCount';
import { Link } from 'react-router-dom';
import { Product } from '../../redux/slices/basketSlice';



const BasketProduct: React.FC<Product> = ({ count, image, name, price, id, link }) => {
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
        count={count ? count : 0}
        id={Number(id)}
      />
      <p className={styles.Total}>
        Итого: <span className={styles.Sum}>{count ? price * count : '0'} ₽</span>
      </p>
    </div>
  );
};
export default BasketProduct;
