import BookingForm from '../Components/BookingForm';
import { useState } from 'react';
import type {
	BookingFormData,
	BookingRequest,
} from '../Utils/Interfaces/Index.ts';
import { createBooking } from '../Services/api';
import ErrorComponent from '../Components/ErrorComponent.tsx';

function BookingView() {
	const [isError, setIsError] = useState(false);
	const [bookingForm, setBookingForm] = useState<BookingFormData>({
		date: '',
		time: '',
		players: 0,
		lanes: 1,
		shoes: [],
	});

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		setIsError(false);
		e.preventDefault();
		const bookingRequest: BookingRequest = {
			when: `${bookingForm.date}T${bookingForm.time}`,
			lanes: bookingForm.lanes,
			people: bookingForm.players,
			shoes: bookingForm.shoes,
		};
		try {
			let confirmationData = await createBooking(bookingRequest);
			console.log('confirmation:', confirmationData);
		} catch (error) {
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
			<ErrorComponent isError={isError} onClose={() => setIsError(false)} />
		</>
	);
}

export default BookingView;
