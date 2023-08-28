import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './SingleProduct.module.scss';

const SingleProduct = () => {
  const params = useParams();
  console.log(params);
  return <div>SingleProduct</div>;
};
export default SingleProduct;
