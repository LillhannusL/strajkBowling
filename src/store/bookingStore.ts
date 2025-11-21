import { create } from 'zustand';
import axios from 'axios';
import type {
	BookingRequest,
	BookingResponse,
} from '../Utils/Interfaces/Index';

interface BookingState {
	bookingResponse: BookingResponse | null;
	loading: boolean;
	error: string | null;
	apiKey: string | null;

	setBookingResponse: (data: BookingResponse) => void;

	fetchApiKey: () => Promise<string>;
	createBooking: (booking: BookingRequest) => Promise<BookingResponse>;
}

export const useBookingStore = create<BookingState>((set, get) => ({
	bookingResponse: null,
	loading: false,
	error: null,
	apiKey: null,

	setBookingResponse: (data) => {
		set(() => ({
			bookingResponse: data,
		}));
		console.log('response', data);
	},

	fetchApiKey: async () => {
		const res = await axios.get(
			'https://731xy9c2ak.execute-api.eu-north-1.amazonaws.com/key'
		);
		console.log('fetchApiKey response:', res.data);
		const key = res.data?.key;
		set({ apiKey: key });
		return key;
	},

	createBooking: async (booking) => {
		const { apiKey, fetchApiKey } = get();

		let key = apiKey;
		if (!key) {
			key = await fetchApiKey();
		}

		set({ loading: true, error: null });

		try {
			const res = await axios.post(
				'https://731xy9c2ak.execute-api.eu-north-1.amazonaws.com/booking',
				booking,
				{
					headers: {
						'x-api-key': key,
					},
				}
			);

			const data = res.data as BookingResponse;

			set({
				bookingResponse: data,
				loading: false,
			});

			return data;
		} catch (error: any) {
			console.log(error);
			const msg =
				error.response?.data?.message ||
				error.message ||
				'Something went wrong with the booking request';

			set({ loading: false, error: msg });

			throw new Error(msg);
		}
	},
}));
