import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BookingView from './Views/BookingView';
import ConfirmationView from './Views/ConfirmationView';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<BookingView />} />
				<Route path="/confirmation" element={<ConfirmationView />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
