import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Work080701 from '@/modules/work080701';
import Work080702 from '@/modules/work080702';

import { Main } from './pages/Main';

const App = () => {
	return (
		<BrowserRouter>
			<div className='app-container'>
				<div className='app-nav' />
				<div className='app-main'>
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/work080701' element={<Work080701 />} />
						<Route path='/work080702' element={<Work080702 />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};
export default App;
