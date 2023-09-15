import { LuMenu } from 'react-icons/lu';
import styles from './Buttons.module.scss';

interface BurgerButtonProps {
  setOpen: (value: boolean) => void;
}


const BurgerButton: React.FC<BurgerButtonProps> = ({ setOpen }) => {

  return (
    <button className={`${styles.Button} ${styles.BurgerButton}`} onClick={() => setOpen(true)}>
      <LuMenu size='24px'/>
    </button>
  )
}
export default BurgerButton