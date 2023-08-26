import { useMediaQuery } from 'react-responsive';

import Button from "../Button/Button";
import styles from "./SingleSlide.module.scss";
import { Link } from 'react-router-dom';

const SingleSlide = (props) => {
  const { title, text, buttonText, imageWide, imageSmall, linkTo } = props;
  const isMoreThan769 = useMediaQuery({ minWidth: 769 })

  return (
    <div className={styles.SingleSlide}>
      {isMoreThan769 && <div className={styles.Content}>
        <h1 className={styles.Title} >{title}</h1>
        <p className={styles.Text}>{text}</p>
        <Link to={linkTo}><Button text={buttonText} /></Link>
      </div>}
      <div className={styles.Cover}>
        {
          isMoreThan769
            ? <img src={imageWide} className={styles.Image} />
            : <Link to={linkTo}>
              <img src={imageSmall} className={styles.Image} />
            </Link>
        }
      </div>
    </div>
  )
}
export default SingleSlide

