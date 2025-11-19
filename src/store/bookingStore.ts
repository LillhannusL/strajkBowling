import { create } from 'zustand';
import type { BookingResponse } from '../Utils/Interfaces/Index';

interface BookingState {
	bookingResponse: BookingResponse | null;
	setBookingResponse: (data: BookingResponse) => void;
}

export const useBookingStore = create<BookingState>((set) => ({
	bookingResponse: null,

	setBookingResponse: (data) => {
		set(() => ({
			bookingResponse: data,
		}));
		console.log('response', data);
	},
}));
