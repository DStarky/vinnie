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

  return <div>{cake ? cake.name : <h1>Page Not Found</h1>}</div>;
};

export default SingleProduct;
