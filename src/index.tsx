import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';

import 'normalize.css';
import './index.scss';
import App from './App';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<Provider store={store}>
		<PersistGate
			loading={null}
			persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
);
