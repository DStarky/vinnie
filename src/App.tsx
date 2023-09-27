import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';

// ================= LAZY ==================

const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Delivery = lazy(() => import('./pages/Delivery/Delivery'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));
const News = lazy(() => import('./pages/News/News'));
const Favourites = lazy(() => import('./pages/Favourites/Favourites'));
const UserPage = lazy(() => import('./pages/UserPage/UserPage'));
const BasketPage = lazy(() => import('./pages/BasketPage/BasketPage'));
const SingleProduct = lazy(() => import('./pages/SingleProduct/SingleProduct'));
const Order = lazy(() => import('./pages/Order/Order'));
const Success = lazy(() => import('./pages/Success/Success'));

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Layout />}>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path='delivery'
						element={
							<Suspense fallback={<h1>Идет загрузка ...</h1>}>
								<Delivery />
							</Suspense>
						}
					/>
					<Route
						path='about-us'
						element={
							<Suspense fallback={<h1>Идет загрузка ...</h1>}>
								<AboutUs />
							</Suspense>
						}
					/>
					<Route
						path='news'
						element={
							<Suspense fallback={<h1>Идет загрузка ...</h1>}>
								<News />
							</Suspense>
						}
					/>
					<Route
						path='favourites'
						element={
							<Suspense fallback={<h1>Идет загрузка ...</h1>}>
								<Favourites />
							</Suspense>
						}
					/>
					<Route
						path='user-page'
						element={
							<Suspense fallback={<h1>Идет загрузка ...</h1>}>
								<UserPage />
							</Suspense>
						}
					/>
					<Route
						path='basket'
						element={
							<Suspense fallback={<h1>Идет загрузка ...</h1>}>
								<BasketPage />
							</Suspense>
						}
					/>
					<Route
						path='order'
						element={
							<Suspense fallback={<h1>Идет загрузка ...</h1>}>
								<Order />
							</Suspense>
						}
					/>
					<Route
						path='success'
						element={
							<Suspense fallback={<h1>Идет загрузка ...</h1>}>
								<Success />
							</Suspense>
						}
					/>
					<Route
						path='production/:slug'
						element={
							<Suspense fallback={<h1>Идет загрузка ...</h1>}>
								<SingleProduct />
							</Suspense>
						}
					/>
					<Route
						path='*'
						element={
							<Suspense fallback={<h1>Идет загрузка ...</h1>}>
								<NotFound />
							</Suspense>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
