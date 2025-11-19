import BookingForm from '../Components/BookingForm';
import { useState } from 'react';
import type {
	BookingFormData,
	BookingRequest,
} from '../Utils/Interfaces/Index.ts';
import { createBooking } from '../Services/api';
import ErrorComponent from '../Components/ErrorComponent.tsx';
import { useNavigate } from 'react-router-dom';
import { useBookingStore } from '../store/bookingStore.ts';
import { formatBookingWhen } from '../Utils/dateTime.ts';
import { validateBooking } from '../Utils/bookingValidation.ts';

function BookingView() {
	const navigate = useNavigate();
	const { setBookingResponse } = useBookingStore();
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [bookingForm, setBookingForm] = useState<BookingFormData>({
		date: null,
		time: null,
		players: 0,
		lanes: 1,
		shoes: [],
	});

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		setIsError(false);
		setErrorMessage(null);
		e.preventDefault();

		const result = validateBooking(bookingForm);
		if (!result.valid) {
			setErrorMessage(result.message);
			setIsError(true);
			return;
		}

		const when = formatBookingWhen(bookingForm.date!, bookingForm.time!);

		const bookingRequest: BookingRequest = {
			when,
			lanes: bookingForm.lanes,
			people: bookingForm.players,
			shoes: bookingForm.shoes,
		};

		console.log('bookingRequest:', bookingRequest);

		try {
			let bookingResponse = await createBooking(bookingRequest);
			setBookingResponse(bookingResponse);
			console.log('confirmation:', bookingResponse);
			navigate('/confirmation');
		} catch (error: any) {
			setErrorMessage(error.message || 'Unexpected error occured');
			setIsError(true);
		}
	}

	return (
		<>
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
		</>
	);
}

export default BookingView;
