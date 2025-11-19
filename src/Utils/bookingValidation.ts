import type { BookingFormData } from './Interfaces/Index';

/**
 * validateplayers
    max 4 spelare per bana
    minst 1 spelare

//validateShoes
    antal skor === antal spelare
    skostorlekar större än 0

//validateDateAndTime
    datum o tid finns
    inte är i de förflutna
*/

export function validatePlayers(formData: BookingFormData) {
	if (formData.players < 1) {
		let error = 'fel!';
		return console.log(error);
	}
}
