export function formatBookingWhen(date: Date, time: Date): string {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	const hour = String(time.getHours()).padStart(2, '0');
	const min = String(time.getMinutes()).padStart(2, '0');

	return `${year}-${month}-${day}T${hour}:${min}`;
}
