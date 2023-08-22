import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link to="/" className='logo'>Винни-пух</Link>
    </header>
  )
}
export default Header