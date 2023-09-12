import Card from '../Card/Card';
import Skeleton from '../Skeleton/Skeleton';
import FetchError from '../FetchError/FetchError';

import styles from './Production.module.scss';

const Production = (props) => {
  const { cakes, status } = props;
  return (
    <ul className={styles.Production}>
      {status === 'loading' ? (
        [...Array(4)].map((_, index) => {
          return <Skeleton key={index} />;
        })
      ) : status === 'error' ? (
        <FetchError />
      ) : (
        cakes.map((cake) => {
          return (
            <Card
              {...cake}
              key={cake.id}
            />
          );
        })
      )}
    </ul>
  );
};
export default Production;
