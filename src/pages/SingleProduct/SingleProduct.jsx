import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import styles from './SingleProduct.module.scss';
import ProductCount from '../../components/ProductCount/ProductCount';
import Production from '../../components/Production/Production';
import NotFound from '../../pages/NotFound/NotFound';

const SingleProduct = () => {
  const { slug } = useParams();
  const [cake, setCake] = useState({});
  const [similar, setSimilar] = useState([]);
  const [count, setCount] = useState(1);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://64e5c4a909e64530d17efcf9.mockapi.io/productions?slug=${slug}`,
    )
      .then((data) => data.json())
      .then((cake) => {
        if (cake) {
          setCake(cake[0]);
          setIsLoading(false);
        }
      })
      .catch((e) => console.log(e));
  }, [slug]);

  useEffect(() => {
    if (cake) {
      fetch(
        `https://64e5c4a909e64530d17efcf9.mockapi.io/productions?category=${cake.category}&page=1&limit=3`,
      )
        .then((data) => data.json())
        .then((cakes) => setSimilar(cakes))
        .catch((e) => console.log(e));
    }
  }, [cake]);

  if (!cake) {
    return <NotFound />;
  }

  return (
    <>
      {isLoading ? (
        <div className={styles.LoadingParent}>
          <div className={styles.Loading}></div>
        </div>
      ) : (
        <div className={styles.Container}>
          <p className={styles.BreadCrumbs}>
            <Link to='/'>Главная</Link> / {cake.category} / {cake.name}
          </p>
          <article className={styles.Page}>
            <div className={styles.Cover}>
              <img
                src={cake.image}
                alt={cake.name}
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
          <div className={styles.Similar}>
            <h3 className={styles.FromCategory}>
              Другие товары из этой категории:
            </h3>
            <Production cakes={similar} />
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
