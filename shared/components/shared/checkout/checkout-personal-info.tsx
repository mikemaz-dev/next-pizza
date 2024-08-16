import React from 'react'
import { WhiteBlock } from '../white-block'
import { FormInput } from '../form'

interface Props {
	disabled?: boolean
	className?: string
}

export const CheckoutPersonalInfo: React.FC<Props> = ({ className }) => {
	return (
		<WhiteBlock title='2. Personal info' className={className}>
			<div className='grid grid-cols-2 gap-5'>
				<FormInput name='firstName' className='text-base' placeholder='Name' />
				<FormInput
					name='lastName'
					className='text-base'
					placeholder='LastName'
				/>
				<FormInput name='email' className='text-base' placeholder='Email' />
				<FormInput
					type='phone'
					name='phone'
					className='text-base'
					placeholder='Phone'
				/>
			</div>
		</WhiteBlock>
	)
}
