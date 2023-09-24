import { Outlet } from 'react-router-dom';
import { Header, Footer } from '..';
const Layout: React.FC = () => {
	return (
		<div className='container'>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
export default Layout;
