import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookingView from './Views/BookingView';
import ConfirmationView from './Views/ConfirmationView';
import SideNav from './Components/SideNav';

function App() {
	return (
		<BrowserRouter>
			<div className="app-container">
				<SideNav />
				<Routes>
					<Route path="/" element={<BookingView />} />
					<Route path="/confirmation" element={<ConfirmationView />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
