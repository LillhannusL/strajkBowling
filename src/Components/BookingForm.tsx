import './BookingForm.css';
import type { BookingFormData } from '../Utils/Interfaces/Index';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
		setBookingForm((prev) => {
			let nmbrOfLanes = Math.ceil(newPlayers / 4);
			return {
				...prev,
				players: newPlayers,
				shoes: Array(newPlayers).fill(0),
				lanes: prev.lanes < nmbrOfLanes ? nmbrOfLanes : prev.lanes,
			};
		});
	}

	return (
		<section>
			<form onSubmit={handleSubmit} className="Bookingform">
				<fieldset>
					<legend>Date</legend>
					<DatePicker
						dateFormat="dd MMM"
						onChange={(date) => setBookingForm((prev) => ({ ...prev, date }))}
						selected={bookingForm.date}
					/>
				</fieldset>
				<fieldset>
					<legend>Time</legend>
					<DatePicker
						selected={bookingForm.time}
						showTimeSelect
						showTimeSelectOnly
						timeIntervals={15}
						timeFormat="HH:mm"
						dateFormat="HH:mm"
						onChange={(date) =>
							setBookingForm((prev) => ({ ...prev, time: date }))
						}
					/>
				</fieldset>

				<fieldset>
					<legend>Number of awesome bowlers</legend>
					<input
						type="number"
						value={bookingForm.players}
						onFocus={(e) => {
							if (e.target.value === '0') e.target.value = '';
						}}
						onChange={(e) => handlePlayersChange(Number(e.target.value))}
					/>
				</fieldset>

				<fieldset>
					<legend>Number of lanes</legend>
					<input
						type="number"
						value={bookingForm.lanes}
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
