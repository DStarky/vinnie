import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { FaTelegram, FaVk, FaInstagram } from 'react-icons/fa'; // Подключение иконок

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div>
        <Link
          to='/'
          className={styles.Logo}>
          Винни-пух
        </Link>
      </div>
      <div className={styles.Navigation}>
        <h3>Навигация:</h3>
        <ul>
          <li>
            <Link to='/'>Главная</Link>
          </li>
          <li>
            <Link to='/basket'>Корзина</Link>
          </li>
          <li>
            <Link to='/delivery'>Доставка</Link>
          </li>
          <li>
            <Link to='/jobs'>Вакансии</Link>
          </li>
          <li>
            <Link to='/news'>Новости</Link>
          </li>
        </ul>
      </div>
      <div className={styles.Checkout}>
        <h3>Оформить заказ:</h3>
        <p>
          Телефон: <a href='tel:+73532307536'>+7 (3532) 30-75-36</a>,{' '}
          <a href='tel:+73532307010'>30-70-10</a>
        </p>
        <p>
          Email:{' '}
          <a href='mailto:winnipuhtort@yandex.ru'>winnipuhtort@yandex.ru</a>
        </p>
      </div>
      <div className={styles.Worktime}>
        <h3>Время работы:</h3>
        <p>Заказы на доставку принимаются с 9:00 до 22:00</p>
      </div>
      <div className={styles.Social}>
        <h3>Мы в соц. сетях:</h3>
        <div className={styles.SocialIcons}>
          <a href='#'>
            <FaTelegram size='32px' />
          </a>
          <a href='#'>
            <FaVk size='32px' />
          </a>
          <a href='#'>
            <FaInstagram size='32px' />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
