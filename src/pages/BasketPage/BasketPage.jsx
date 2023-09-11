import BasketProduct from '../../components/BasketProduct/BasketProduct';
import styles from './BasketPage.module.scss';

const BasketPage = () => {
  return (
    <section className={styles.Basket}>
      <h2>Корзина</h2>

      <main className={styles.Content}>
        {/* <p className={styles.NothingText}>Вы пока ничего не добавили :(</p> */}
        <div className={styles.Titles}>
          <h3>Все товары</h3>
          <button className={styles.ClearBasketButton}>Очистить корзину</button>
        </div>
        <ul className={styles.List}>
          <BasketProduct />
        </ul>
      </main>
    </section>
  );
};
export default BasketPage;
