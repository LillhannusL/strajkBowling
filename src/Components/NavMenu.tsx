import './NavMenu.css';
import { Link } from 'react-router-dom';

type navMenuProps = {
	isNavClosed: boolean;
	changeIsNavClosed: (isNavClosed: boolean) => void;
};

const NavMenu = ({ isNavClosed, changeIsNavClosed }: navMenuProps) => {
	const items = [
		{
			routerLink: '',
			label: 'Booking',
		},
		{
			routerLink: 'Confirmation',
			label: 'Confirmation',
		},
	];

	const closeNav = () => {
		changeIsNavClosed(true);
	};

	return (
		<div className={`sideNav ${isNavClosed ? 'closed' : ''}`}>
			<div className="logo-container">
				<button className="logo">Menu</button>
				<div className="logo-text">App</div>
				<button className="btn-close" onClick={closeNav}>
					Close
				</button>
			</div>
			<div className="sidenav-nav">
				{items.map((item) => (
					<li key={item.label} className="sidenav-nav-item">
						<Link className="sidenav-nav-link" to={item.routerLink}>
							<span>{item.label}</span>
						</Link>
					</li>
				))}
			</div>
		</div>
	);
};

export default NavMenu;
