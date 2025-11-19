import './BookingForm.css';
import type { BookingFormData } from '../Utils/Interfaces/Index';

interface BookingFormProps {
	bookingForm: BookingFormData;
	setBookingForm: React.Dispatch<React.SetStateAction<BookingFormData>>;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

function BookingForm({
	bookingForm,
	setBookingForm,
	handleSubmit,
}: BookingFormProps) {
	function handlePlayersChange(newPlayers: number): void {
		let nmbrOfLanes = Math.ceil(bookingForm.players / 4);
		setBookingForm((prev) => ({
			...prev,
			players: newPlayers,
			shoes: Array(newPlayers).fill(0),
			lanes: nmbrOfLanes,
		}));
	}

	return (
		<section>
			<form onSubmit={handleSubmit} className="Bookingform">
				<fieldset>
					<legend>Date</legend>
					<input
						type="date"
						value={bookingForm.date}
						onChange={(e) =>
							setBookingForm((prev) => ({ ...prev, date: e.target.value }))
						}
					/>
				</fieldset>
				<fieldset>
					<legend>Time</legend>
					<input
						type="time"
						step={900}
						value={bookingForm.time}
						onChange={(e) =>
							setBookingForm((prev) => ({ ...prev, time: e.target.value }))
						}
					/>
				</fieldset>

				<fieldset>
					<legend>Number of awesome bowlers</legend>
					<input
						type="number"
						value={bookingForm.players}
						onChange={(e) => handlePlayersChange(Number(e.target.value))}
					/>
				</fieldset>

				<fieldset>
					<legend>Number of lanes</legend>
					<input
						type="number"
						min={Math.ceil(bookingForm.players / 4)}
						value={bookingForm.lanes}
						max={bookingForm.players}
						onChange={(e) => {
							setBookingForm((prev) => ({
								...prev,
								lanes: Number(e.target.value),
							}));
						}}
					/>
				</fieldset>

				{bookingForm.shoes.map((size, index) => (
					<fieldset key={index}>
						<legend>shoe size / person {index + 1}</legend>
						<select
							value={size}
							onChange={(e) => {
								const newShoes = [...bookingForm.shoes];
								newShoes[index] = Number(e.target.value);
								setBookingForm((prev) => ({
									...prev,
									shoes: newShoes,
								}));
							}}
						>
							<option value={0}>Choose Size</option>
							<option value={35}>35</option>
							<option value={36}>36</option>
							<option value={37}>37</option>
							<option value={38}>38</option>
							<option value={39}>39</option>
							<option value={40}>40</option>
							<option value={41}>41</option>
							<option value={42}>42</option>
							<option value={43}>43</option>
							<option value={44}>44</option>
							<option value={45}>45</option>
							<option value={1}>I have my own!</option>
						</select>
					</fieldset>
				))}

				<button type="submit">Striiike!</button>
			</form>
		</section>
	);
}

export default BookingForm;
