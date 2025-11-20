import './BookingForm.css';
import type { BookingFormData } from '../Utils/Interfaces/Index';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ShoeDropDown from './ShoeDropDown/ShoeDropDown';
import Button from './Button/Button';

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
		<section className="Bookingform">
			<form onSubmit={handleSubmit} className="Bookingform__form">
				<section className="bookingform__top">
					<p className="divider">WHEN, WHAT & WHO</p>
					<div className="bookinform__date">
						<fieldset>
							<legend>DATE</legend>
							<DatePicker
								className="datepicker-input"
								dateFormat="dd MMM"
								onChange={(date) =>
									setBookingForm((prev) => ({ ...prev, date }))
								}
								selected={bookingForm.date}
							/>
						</fieldset>
						<fieldset>
							<legend>TIME</legend>
							<DatePicker
								className="datepicker-input"
								calendarClassName="datepicker-popup"
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
					</div>
					<fieldset>
						<legend>NUMBER OF AWESOME BOWLERS</legend>
						<div className="booking__inputAndLabel">
							<input
								type="number"
								value={bookingForm.players}
								onFocus={(e) => {
									if (e.target.value === '0') e.target.value = '';
								}}
								onChange={(e) => handlePlayersChange(Number(e.target.value))}
							/>
							<span>pers</span>
						</div>
					</fieldset>
					<fieldset>
						<legend>NUMBER OF LANES</legend>
						<div className="booking__inputAndLabel">
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
							<span>lanes</span>
						</div>
					</fieldset>
				</section>

				<section className="bookingform__bottom">
					<p className="divider">SHOES</p>
					{bookingForm.shoes.map((size, index) => (
						<fieldset key={index}>
							<legend>SHOE SIZE / PERSON {index + 1}</legend>
							<ShoeDropDown
								value={size}
								onChange={(newSize) => {
									const newShoes = [...bookingForm.shoes];
									newShoes[index] = newSize;
									setBookingForm((prev) => ({ ...prev, shoes: newShoes }));
								}}
							/>
						</fieldset>
					))}
				</section>
				<Button text="STRIIIIIKE!" />
			</form>
		</section>
	);
}

export default BookingForm;
