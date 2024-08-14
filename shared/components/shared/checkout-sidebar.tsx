import { Package, Percent, Truck, ArrowRight } from 'lucide-react'
import React from 'react'
import { Button } from '../ui'
import { CheckoutItemDetails } from './checkout-item-details'
import { WhiteBlock } from './white-block'

interface Props {
	totalAmount: number
	className?: string
}

export const VAT = 15
export const DELIVERY_PRICE = 10

export const CheckoutSidebar: React.FC<Props> = ({
	totalAmount,
	className,
}) => {
	const vatPrice = (totalAmount * VAT) / 100
	const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE

	return (
		<WhiteBlock className='p-6 sticky top-4'>
			<div className='flex flex-col gap-1 pb-7 border-b border-b-neutral-200'>
				<span className='text-xl'>Total: </span>
				<span className='text-[34px] font-extrabold'>{totalPrice} $</span>
			</div>
			<CheckoutItemDetails
				title={
					<div className='flex items-center'>
						<Package className='mr-3 text-gray-300' size={20} />
						Cart cost:
					</div>
				}
				value={totalAmount}
			/>
			<CheckoutItemDetails
				title={
					<div className='flex items-center'>
						<Percent className='mr-3 text-gray-300' size={20} />
						Taxes:
					</div>
				}
				value={vatPrice}
			/>
			<CheckoutItemDetails
				title={
					<div className='flex items-center'>
						<Truck className='mr-3 text-gray-300' size={20} />
						Delivery:
					</div>
				}
				value={DELIVERY_PRICE}
			/>
			<Button
				type='submit'
				className='w-full h-14 rounded-2xl mt-6 text-base font-bold'
			>
				Go to order
				<ArrowRight className='w-5 ml-2' />
			</Button>
		</WhiteBlock>
	)
}
