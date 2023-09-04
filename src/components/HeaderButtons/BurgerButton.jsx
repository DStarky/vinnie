import { LuMenu } from 'react-icons/lu';
import styles from './Buttons.module.scss';

const BurgerButton = (props) => {
  const { setOpen } = props;

  return (
    <button className={`${styles.Button} ${styles.BurgerButton}`} onClick={() => setOpen(true)}>
      <LuMenu size='24px'/>
    </button>
  )
}
export default BurgerButton