import styles from './BurgerButton.module.scss';

const BurgerButton = (props) => {
  const { children, setOpen } = props;
  return (
    <button className={styles.Button} onClick={() => setOpen(true)}>
      {children}
    </button>
  )
}
export default BurgerButton