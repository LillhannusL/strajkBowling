import {
	Field,
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from '@headlessui/react';
import './ShoeDropDown.css';
import type { ShoeOption } from '../../Utils/Interfaces/Index';

interface ShoeDropDownProps {
	value: ShoeOption;
	onChange: (value: ShoeOption) => void;
}

const shoeSizes: ShoeOption[] = [
	{ id: 35, size: 'Euro 35' },
	{ id: 36, size: 'Euro 36' },
	{ id: 37, size: 'Euro 37' },
	{ id: 38, size: 'Euro 38' },
	{ id: 39, size: 'Euro 39' },
	{ id: 40, size: 'Euro 40' },
	{ id: 41, size: 'Euro 41' },
	{ id: 42, size: 'Euro 42' },
	{ id: 43, size: 'Euro 43' },
	{ id: 44, size: 'Euro 44' },
	{ id: 45, size: 'Euro 45' },
	{ id: 1, size: 'I have my own' },
];

function ShoeDropDown({ value, onChange }: ShoeDropDownProps) {
	return (
		<Field>
			<Listbox value={value} onChange={onChange}>
				<ListboxButton className="shoe-button">{value.size}</ListboxButton>
				<ListboxOptions className="shoe-options">
					{shoeSizes.map((shoesize) => (
						<ListboxOption
							key={shoesize.id}
							value={shoesize || { id: 0, size: '' }}
							className="shoe"
						>
							{shoesize.size}
						</ListboxOption>
					))}
				</ListboxOptions>
			</Listbox>
		</Field>
	);
}

export default ShoeDropDown;
