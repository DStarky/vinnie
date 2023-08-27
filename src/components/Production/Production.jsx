import Card from '../Card/Card';
import styles from './Production.module.scss';

const Production = (props) => {
  const { cakes } = props;

  return (
    <ul className={styles.Production}>
      {cakes.map((cake) => {
        return (
          <Card
            {...cake}
            key={cake.id}
          />
        );
      })}
    </ul>
  );
};
export default Production;
