export function formatBookingWhen(date: Date, time: Date): string {
	const year: number = date.getFullYear();
	const month: string = String(date.getMonth() + 1).padStart(2, '0');
	const day: string = String(date.getDate()).padStart(2, '0');
	const hour: string = String(time.getHours()).padStart(2, '0');
	const min: string = String(time.getMinutes()).padStart(2, '0');

	return `${year}-${month}-${day}T${hour}:${min}`;
}
