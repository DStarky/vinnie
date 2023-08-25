import { useMediaQuery } from 'react-responsive';

import Button from "../Button/Button";
import styles from "./SingleSlide.module.scss";

const SingleSlide = () => {
  const isMoreThan769 = useMediaQuery({ minWidth: 769 })

  return (
    <div className={styles.SingleSlide}>
      <div className={isMoreThan769 ? styles.Content : styles.ContentAbsolute}>
        <h1 className={styles.Title}>Бесплатная доставка</h1>
        <p className={styles.Text}>Только до конца месяца</p>
        <Button text="Перейти к новости" />
      </div>
      <div className={styles.Cover}>
        <img src="images/slider-1.jpg" className={styles.Image} />
      </div>
    </div>
  )
}
export default SingleSlide