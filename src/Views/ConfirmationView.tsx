import { useBookingStore } from '../store/bookingStore';

function ConfirmationView() {
	const bookingResponse = useBookingStore((state) => state.bookingResponse);
	if (!bookingResponse) return <p>No booking found</p>;

	const { bookingDetails } = bookingResponse;
	const { bookingId, lanes, people, price, when } = bookingDetails;

	return (
		<section>
			<h1>SEE YOU SOON!</h1>
			<h4>BOOKING DETAILS</h4>
			<article className="bookingDetails">
				<fieldset>
					<legend>when</legend>
					<p>{when}</p>
				</fieldset>
				<fieldset>
					<legend>who</legend>
					<p>{people}</p>
				</fieldset>
				<fieldset>
					<legend>lanes</legend>
					<p>{lanes}</p>
				</fieldset>
				<fieldset>
					<legend>booking number</legend>
					<p>{bookingId}</p>
				</fieldset>
			</article>
			<article>
				<p>total {price}</p>
			</article>
			<button>sweet, lets go!</button> {/* ska leda tillbaka till booking*/}
		</section>
	);
}

export default ConfirmationView;
