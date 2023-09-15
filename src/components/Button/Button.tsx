import styles from './Button.module.scss';

const Button: React.FC<{ text: string }> = ({ text }) => {
  return <button className={styles.Button}>{text}</button>;
};
export default Button;
