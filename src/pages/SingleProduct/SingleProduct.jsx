import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import styles from './SingleProduct.module.scss';
import ProductCount from '../../components/ProductCount/ProductCount';
import AddBasket from '../../components/CardButtons/AddBasket';

const SingleProduct = () => {
  const { slug } = useParams();
  const [cake, setCake] = useState({});
  const [count, setCount] = useState(1);
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    fetch(
      `https://64e5c4a909e64530d17efcf9.mockapi.io/productions?slug=${slug}`,
    )
      .then((data) => data.json())
      .then((cake) => setCake(cake[0]))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {cake && (
        <div className={styles.Container}>
          <p className={styles.BreadCrumbs}>
            <Link to='/'>Главная</Link> / {cake.category} / {cake.name}
          </p>
          <article className={styles.Page}>
            <div className={styles.Cover}>
              <img
                src={cake.image}
                className={styles.Image}
              />
            </div>
            <div className={styles.Content}>
              <ul className={styles.Properties}>
                {cake.properties?.map((property, index) => {
                  return (
                    <li
                      className={styles.Property}
                      key={index}>
                      {property}
                    </li>
                  );
                })}
              </ul>
              <h2 className={styles.Name}>{cake.name}</h2>
              <p className={styles.Price}>
                <span>{cake.price}</span> руб.
              </p>
              <div className={styles.AddToBasket}>
                <ProductCount
                  count={count}
                  setCount={setCount}
                />
                <button
                  className={`${styles.AddButton} 
                ${isButtonActive ? styles.Active : ''}`}
                  onClick={() => setIsButtonActive((prev) => !prev)}>
                  {isButtonActive ? 'Удалить из корзины' : 'Добавить в корзину'}
                </button>
              </div>
              <p className={styles.Weight}>
                Вес: <span>{cake.weight}</span>
              </p>
              <p className={styles.Description}>{cake.description}</p>
            </div>
          </article>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
