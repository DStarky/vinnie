import styles from "./SingleSlide.module.scss";

const SingleSlide = () => {
  return (
    <div className={styles.SingleSlide}>
      <div className={styles.Content}>
        <h1 className={styles.Title}>Бесплатная доставка</h1>
        <p className={styles.Text}>Только до конца месяца</p>
        <button className={styles.Button}>Перейти к новости</button>
      </div>
      <div className={styles.Cover}>
        <img src="images/slider-1.jpg" className={styles.Image} />
      </div>
    </div>
  )
}
export default SingleSlide