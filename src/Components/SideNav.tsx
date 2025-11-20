import { useState } from 'react';
import './SideNav.css';
import { Link } from 'react-router-dom';

export default function SideNav() {
	const [open, setOpen] = useState(false);

	return (
		<>
			{!open && (
				<button className="menuBtn" onClick={() => setOpen(true)}>
					<i className="fa-solid fa-bars"></i>
				</button>
			)}

			{open && <div className="overlay" onClick={() => setOpen(false)} />}

			<div className={`sidepanel ${open ? 'open' : ''}`}>
				<button className="closeBtn" onClick={() => setOpen(false)}>
					✕
				</button>

				<nav className="nav">
					<ul>
						<li>
							<Link to="/" onClick={() => setOpen(false)}>
								Booking
							</Link>
						</li>
						<li>
							<Link to="/confirmation" onClick={() => setOpen(false)}>
								Confirmation
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}
