import type { BookingFormData } from './Interfaces/Index';

export function validateBooking(booking: BookingFormData) {
	if (!booking) {
		return { valid: false, message: 'Missing booking body' };
	}

	if (!booking.date) {
		return { valid: false, message: 'Date is missing' };
	}
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	if (booking.date < today) {
		return { valid: false, message: 'Date must be in the future' };
	}

	if (!booking.time) {
		return { valid: false, message: 'Time is required' };
	}

	if (!booking.players || booking.players <= 0) {
		return { valid: false, message: 'There have to be at least one bowler!' };
	}

	const minlanes = Math.ceil(booking.players / 4);
	if (booking.lanes < minlanes) {
		return { valid: false, message: `You need at least ${minlanes} lane(s).` };
	}

	if (booking.lanes > booking.players) {
		return { valid: false, message: 'Lanes cannot be more than players' };
	}

	if (booking.shoes.some((s) => s === 0)) {
		return { valid: false, message: 'All players must select shoe size' };
	}

	return { valid: true };
}
