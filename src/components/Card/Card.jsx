import { Heart, Plus } from 'lucide-react';
import styles from './Card.module.scss';
import AddFavourite from '../CardButtons/AddFavourite';
import AddBasket from '../CardButtons/AddBasket';

const Card = (props) => {
  const { name, price, category, image, properties, weight, id, description } =
    props;
  return (
    <li className={styles.Card}>
      {properties && (
        <ul className={styles.Properties}>
          {properties.map((property, index) => {
            return (
              <li
                className={styles.Property}
                key={index}>
                {property}
              </li>
            );
          })}
        </ul>
      )}
      <div className={styles.Cover}>
        <img
          className={styles.Image}
          src={image}
          alt={name}
        />
      </div>
      <h3 className={styles.Name}>{name}</h3>
      <p className={styles.Weight}>Вес: {weight}</p>
      <p className={styles.Description}>{description}</p>
      <div className={styles.Bottom}>
        <p className={styles.Price}>
          <span>{price}</span> руб.
        </p>
        <AddFavourite />
        <AddBasket />
      </div>
    </li>
  );
};
export default Card;
