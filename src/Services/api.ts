import axios from 'axios';
import type {
	BookingRequest,
	BookingResponse,
} from '../Utils/Interfaces/Index';

let apiKey: string | null = null;

// hämta nyckel
export async function fetchApiKey() {
	const response = await axios.get(
		'https://731xy9c2ak.execute-api.eu-north-1.amazonaws.com/key'
	);
	apiKey = response.data.key;
	return apiKey;
}

//skicka till POST
export async function createBooking(booking: BookingRequest) {
	if (!apiKey) {
		await fetchApiKey();
	}
	try {
		const res = await axios.post(
			'https://731xy9c2ak.execute-api.eu-north-1.amazonaws.com/booking',
			booking,
			{
				headers: {
					'x-api-key': apiKey,
				},
			}
		);
		console.log('api sent:', booking);
		console.log('booking Request: ', res.data);
		return res.data as BookingResponse;
	} catch (error) {
		console.log(error);
		throw error;
	}
}
