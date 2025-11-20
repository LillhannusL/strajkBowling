import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookingView from './Views/BookingView';
import ConfirmationView from './Views/ConfirmationView';
import NavMenu from './Components/NavMenu';
import { useState } from 'react';

function App() {
	const [isNavClosed, setIsNavClosed] = useState(true);

	return (
		<div className="app-container">
			<BrowserRouter>
				<NavMenu
					isNavClosed={isNavClosed}
					changeIsNavClosed={(value) => setIsNavClosed(value)}
				/>

				<div className={`content-wrapper ${!isNavClosed ? 'shifted' : ''}`}>
					<button
						onClick={() => setIsNavClosed(false)}
						className="open-nav-btn"
					>
						☰
					</button>
					<Routes>
						<Route path="/" element={<BookingView />} />
						<Route path="/confirmation" element={<ConfirmationView />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
