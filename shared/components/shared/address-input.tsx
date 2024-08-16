'use client'

import { AddressSuggestions } from 'react-dadata'
import 'react-dadata/dist/react-dadata.css'

interface Props {
	onChange?: (value?: string) => void
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
	return (
		<AddressSuggestions
			token='bfc6399fba909bc55e5019c5ddd8c3bdf29f8173'
			onChange={data => onChange?.(data?.value)}
			filterLanguage='en'
		/>
	)
}
