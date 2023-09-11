import { useSelector } from 'react-redux';
import BasketProduct from '../../components/BasketProduct/BasketProduct';
import styles from './BasketPage.module.scss';

const BasketPage = () => {
  const basket = useSelector((state) => state.basket.products);

  return (
    <section className={styles.Basket}>
      <h2>Корзина</h2>

      <main className={styles.Content}>
        {basket.length ? (
          <>
            <div className={styles.Titles}>
              <h3>Все товары</h3>
              <button className={styles.ClearBasketButton}>
                Очистить корзину
              </button>
            </div>
            <ul className={styles.List}>
              {basket.map((el) => {
                return <BasketProduct key={el.name} {...el}/>;
              })}
            </ul>
          </>
        ) : (
          <p className={styles.NothingText}>Вы пока ничего не добавили :(</p>
        )}
      </main>
    </section>
  );
};
export default BasketPage;
