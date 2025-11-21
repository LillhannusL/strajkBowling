import BookingForm from '../Components/BookingForm';
import { useState } from 'react';
import type {
	BookingFormData,
	BookingRequest,
} from '../Utils/Interfaces/Index.ts';
import ErrorComponent from '../Components/ErrorComponent.tsx';
import { useNavigate } from 'react-router-dom';
import { useBookingStore } from '../store/bookingStore.ts';
import { formatBookingWhen } from '../Utils/dateTime.ts';
import { validateBooking } from '../Utils/bookingValidation.ts';
import './BookingView.css';
import PageHeader from '../Components/PageHeader/PageHeader.tsx';
import LoadingOverlay from '../Components/LoadingOverlay/LoadingOverlay.tsx';

function BookingView() {
	const navigate = useNavigate();
	const { createBooking, loading } = useBookingStore();
	const [isError, setIsError] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [bookingForm, setBookingForm] = useState<BookingFormData>({
		date: null,
		time: null,
		players: 0,
		lanes: 1,
		shoes: [],
	});

	async function handleSubmit(
		e: React.FormEvent<HTMLFormElement>
	): Promise<void> {
		e.preventDefault();
		setIsError(false);
		setErrorMessage(null);

		const result: { valid: boolean; message?: string } =
			validateBooking(bookingForm);
		if (!result.valid) {
			setErrorMessage(result.message ?? 'Wrong in form');
			setIsError(true);
			return;
		}

		const when: string = formatBookingWhen(
			bookingForm.date!,
			bookingForm.time!
		);
		const shoeNumbers: number[] = bookingForm.shoes.map((s) => s.id);

		const bookingRequest: BookingRequest = {
			when,
			lanes: bookingForm.lanes,
			people: bookingForm.players,
			shoes: shoeNumbers,
		};

		try {
			await createBooking(bookingRequest);
			console.log('Request:', bookingRequest);
			navigate('/confirmation');
		} catch (error: any) {
			setErrorMessage('Unexpected error occured');
			setIsError(true);
		}
	}

	return (
		<article className="bookingview">
			{loading && <LoadingOverlay />}

			<section className="booking__header">
				<PageHeader text="BOOKING" />
			</section>

			<BookingForm
				bookingForm={bookingForm}
				setBookingForm={setBookingForm}
				handleSubmit={handleSubmit}
			/>

			<ErrorComponent
				isError={isError}
				message={errorMessage}
				onClose={() => setIsError(false)}
			/>
		</article>
	);
}

export default BookingView;
