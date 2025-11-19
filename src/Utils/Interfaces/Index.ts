export interface BookingFormData {
	date: string;
	time: string;
	players: number;
	lanes: number;
	shoes: number[];
}

export interface BookingRequest {
	when: string;
	lanes: number;
	people: number;
	shoes: number[];
}

export interface BookingDetails extends BookingRequest {
	price: number;
	bookingId: string;
	active: boolean;
}

export interface BookingResponse {
	success: boolean;
	bookingDetails: BookingDetails;
}
