import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './SingleProduct.module.scss';

const SingleProduct = () => {
  const { slug } = useParams();
  const [cake, setCake] = useState({});
  console.log(cake);
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
      {cake ? (
        <article className={styles.Page}>
          <div className={styles.Cover}>
            <img src={cake.image} />
          </div>
          <div className={styles.Content}>
            <ul className={styles.Properties}>
              {cake.properties.map((property, index) => {
                <li key={index}>{property}</li>;
              })}
            </ul>
          </div>
        </article>
      ) : (
        <h1>Page Not Found</h1>
      )}
    </>
  );
};

export default SingleProduct;
