import styles from "./Button.module.scss";

const Button = (props) => {
  const { text } = props;
  return (
    <button className={styles.Button}>{text}</button>
  )
}
export default Button