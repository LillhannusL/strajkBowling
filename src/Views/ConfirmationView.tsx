import { useBookingStore } from '../store/bookingStore';
import Button from '../Components/Button/Button';
import PageHeader from '../Components/PageHeader/PageHeader';
import './ConfirmationView.css';

function ConfirmationView() {
	const bookingResponse = useBookingStore((state) => state.bookingResponse);

	if (!bookingResponse) {
		return (
			<section className="confirmationView__empty">
				<div className="emptyMessage">
					<p>BOOKING</p>
					<p>CONFIRMATION</p>
				</div>
			</section>
		);
	}

	const { data } = bookingResponse;
	const { bookingDetails } = data;
	const { bookingId, lanes, people, price, when } = bookingDetails;

	function formatDateString(when: string) {
		const dateObj = new Date(when);

		const hours = String(dateObj.getHours()).padStart(2, '0');
		const min = String(dateObj.getMinutes()).padStart(2, '0');
		const time = `${hours}:${min}`;

		const day = dateObj.getDate();
		const monthNames = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];

		const date = `${day} ${monthNames[dateObj.getMonth()]}`;

		return { time, date };
	}

	const result = formatDateString(when);

	return (
		<section className="confirmationView">
			<div className="confirmationView__header">
				<PageHeader text="SEE YOU SOON!" />
			</div>

			<h4 className="divider">BOOKING DETAILS</h4>

			<article className="bookingDetails__top">
				<fieldset>
					<legend>WHEN</legend>
					<p className="confirmation__text">{`${result.time}, ${result.date}`}</p>
				</fieldset>

				<fieldset>
					<legend>WHO</legend>
					<div className="confirmation__who">
						<p className="confirmation__text">{people}</p>
						<span className="confirmation__text">pers</span>
					</div>
				</fieldset>

				<fieldset>
					<legend>LANES</legend>
					<div className="confirmation__lanes">
						<p className="confirmation__text">{lanes}</p>
						<span className="confirmation__text">lanes</span>
					</div>
				</fieldset>

				<fieldset>
					<legend>BOOKING NUMBER</legend>
					<p className="confirmation__text">{bookingId}</p>
				</fieldset>
			</article>

			<article className="bookingDetails__bottom">
				<p className="confirmation__total">total</p>
				<p>{price}sek</p>
			</article>

			<Button text="SWEET! LETS GO!" />
		</section>
	);
}

export default ConfirmationView;
