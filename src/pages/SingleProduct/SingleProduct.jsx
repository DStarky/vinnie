import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './SingleProduct.module.scss';

const SingleProduct = () => {
  const { slug } = useParams();
  const [cake, setCake] = useState({});
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
            <p className={styles.Weight}>
              Вес: <span>{cake.weight}</span>
            </p>
            <p className={styles.Description}>{cake.description}</p>
            <p className={styles.Price}>
              <span>{cake.price}</span> руб.
            </p>
          </div>
        </article>
      )}
    </>
  );
};

export default SingleProduct;
