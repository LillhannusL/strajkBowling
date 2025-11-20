export interface ShoeOption {
	id: number;
	size: string;
}

export interface BookingFormData {
	date: Date | null;
	time: Date | null;
	players: number;
	lanes: number;
	shoes: ShoeOption[];
}

export interface BookingRequest {
	when: string;
	lanes: number;
	people: number;
	shoes: Number[];
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
