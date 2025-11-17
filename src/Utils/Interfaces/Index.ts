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

export interface BookingResponse extends BookingRequest {
	price: number;
	id: string;
	active: boolean;
}
