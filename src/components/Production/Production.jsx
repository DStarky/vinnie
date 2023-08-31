import Card from '../Card/Card';
import Skeleton from '../Skeleton/Skeleton';
import styles from './Production.module.scss';

const Production = (props) => {
  const { cakes, isLoading } = props;

  return (
    <ul className={styles.Production}>
      {cakes.map((cake, index) => {
        return isLoading ? (
          <Skeleton key={index} /> 
          ) : (
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
