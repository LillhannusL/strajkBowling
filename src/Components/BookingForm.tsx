import './BookingForm.css';
import { useState } from 'react';
import type {
	BookingFormData,
	BookingRequest,
} from '../Utils/Interfaces/Index';

function BookingForm() {
	const [bookingForm, setBookingForm] = useState<BookingFormData>({
		date: '',
		time: '',
		players: 0,
		lanes: 1,
		shoes: [],
	});

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const bookingRequest: BookingRequest = {
			when: `${bookingForm.date}T${bookingForm.time}`,
			lanes: bookingForm.lanes,
			people: bookingForm.players,
			shoes: bookingForm.shoes,
		};
		console.log('Skickar form!', bookingRequest);
	}

	function handlePlayersChange(newPlayers: number) {
		setBookingForm((prev) => ({
			...prev,
			players: newPlayers,
			shoes: Array(newPlayers).fill(0),
		}));
	}

	return (
		<section>
			<form onSubmit={handleSubmit} className="Bookingform">
				<label>Datum</label>
				<input
					type="date"
					value={bookingForm.date}
					onChange={(e) =>
						setBookingForm((prev) => ({ ...prev, date: e.target.value }))
					}
				/>

				<label>Tid</label>
				<input
					type="time"
					value={bookingForm.time}
					onChange={(e) =>
						setBookingForm((prev) => ({ ...prev, time: e.target.value }))
					}
				/>

				<label>Antal Spelare</label>
				<input
					type="number"
					min="1"
					value={bookingForm.players}
					onChange={(e) => handlePlayersChange(Number(e.target.value))}
				/>

				<label>Banor</label>
				<input
					type="number"
					min="1"
					value={bookingForm.lanes}
					onChange={(e) =>
						setBookingForm((prev) => ({
							...prev,
							lanes: Number(e.target.value),
						}))
					}
				/>
				{bookingForm.shoes.map((size, index) => (
					<div key={index}>
						<label>Skostolek Spelare {index + 1}</label>
						<input
							type="number"
							value={size}
							onChange={(e) => {
								const newShoes = [...bookingForm.shoes];
								newShoes[index] = Number(e.target.value);
								setBookingForm((prev) => ({
									...prev,
									shoes: newShoes,
								}));
							}}
						/>
					</div>
				))}

				<button type="submit">Striiike!</button>
			</form>
		</section>
	);
}

export default BookingForm;
