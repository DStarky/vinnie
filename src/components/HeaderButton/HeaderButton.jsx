import styles from './HeaderButton.module.scss';

const HeaderButton = (props) => {
  const { text, notifications, children } = props;
  return (
    <button className={styles.Button}>
      {text && <p>{text}</p>}
      {children}
      {notifications && <div className={styles.Notification}>{notifications}</div>}
    </button>

  )

}
export default HeaderButton