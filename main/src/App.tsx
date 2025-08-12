import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Main } from './pages/Main';

const App = () => {
	return (
		<BrowserRouter>
			<div className='app-container'>
				<div className='app-nav' />
				<div className='app-main'>
					<Routes>
						<Route path='/' element={<Main />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};
export default App;
