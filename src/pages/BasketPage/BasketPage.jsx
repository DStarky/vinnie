import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BasketProduct from '../../components/BasketProduct/BasketProduct';
import styles from './BasketPage.module.scss';
import { clearProducts } from '../../redux/slices/basketSlice';

const BasketPage = () => {
  const basket = useSelector((state) => state.basket.products);
  const [areYouSure, setAreYouSure] = useState(false);

  const dispatch = useDispatch();

  const handlerClear = () => {
    if (!areYouSure) {
      setAreYouSure(true);
      return;
    }
    dispatch(clearProducts());
    setAreYouSure(false);
  };

  return (
    <section className={styles.Basket}>
      <h2>Корзина</h2>

      <main className={styles.Content}>
        {basket.length ? (
          <>
            <div className={styles.Titles}>
              <h3>Все товары</h3>

              <button
                className={styles.ClearBasketButton}
                onClick={handlerClear}>
                {areYouSure ? 'Вы уверены?' : 'Очистить корзину'}
              </button>
            </div>
            <ul className={styles.List}>
              {basket.map((el) => {
                return (
                  <BasketProduct
                    key={el.name}
                    {...el}
                  />
                );
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
