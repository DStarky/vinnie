import { useMediaQuery } from 'react-responsive';

import Button from "../Button/Button";
import styles from "./SingleSlide.module.scss";
import { Link } from 'react-router-dom';

const SingleSlide = () => {
  const isMoreThan769 = useMediaQuery({ minWidth: 769 })

  return (
    <div className={styles.SingleSlide}>
      {isMoreThan769 && <div className={styles.Content}>
        <h1 className={styles.Title} >Бесплатная доставка</h1>
        <p className={styles.Text}>Только до  конца месяца</p>
        <Link to='delivery'><Button text="Перейти к новости" /></Link>
      </div>}
      <div className={styles.Cover}>
        {
          isMoreThan769
            ? <img src="images/slider-1.jpg" className={styles.Image} />
            : <Link to='delivery'>
              <img src="images/slider-1-small.jpg" className={styles.Image} />
            </Link>
        }
      </div>
    </div>
  )
}
export default SingleSlide

