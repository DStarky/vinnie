import Card from '../Card/Card';
import Skeleton from '../Skeleton/Skeleton';
import styles from './Production.module.scss';

const Production = (props) => {
  const { cakes, isLoading } = props;
  return (
    <ul className={styles.Production}>
      {isLoading
        ? [...Array(4)].map((_, index) => {
            return <Skeleton key={index} />;
          })
        : cakes.map((cake, index) => {
            return (
              <Card
                {...cake}
                key={cake.id}
                isLoading={isLoading}
              />
            );
          })}
    </ul>
  );
};
export default Production;
