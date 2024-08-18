import { Package, Percent, Truck, ArrowRight } from 'lucide-react'
import React from 'react'
import { Button, Skeleton } from '../ui'
import { CheckoutItemDetails } from './checkout-item-details'
import { WhiteBlock } from './white-block'

interface Props {
	totalAmount: number
	loading?: boolean
	className?: string
}

export const VAT = 15
export const DELIVERY_PRICE = 10

export const CheckoutSidebar: React.FC<Props> = ({
	totalAmount,
	loading,
	className,
}) => {
	const vatPrice = (totalAmount * VAT) / 100
	const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE

	return (
		<WhiteBlock className='p-6 sticky top-4'>
			<div className='flex flex-col gap-1 pb-7 border-b border-b-neutral-200'>
				<span className='text-xl'>Total: </span>
				{loading ? (
					<Skeleton className='h-11 w-44' />
				) : (
					<span className='h-11 text-[34px] font-extrabold'>
						{totalPrice} $
					</span>
				)}
			</div>
			<CheckoutItemDetails
				title={
					<div className='flex items-center'>
						<Package className='mr-3 text-gray-300' size={20} />
						Cart cost:
					</div>
				}
				value={
					loading ? (
						<Skeleton className='h-6 w-16 rounded-[6.5px]' />
					) : (
						`${totalAmount} $`
					)
				}
			/>
			<CheckoutItemDetails
				title={
					<div className='flex items-center'>
						<Percent className='mr-3 text-gray-300' size={20} />
						Taxes:
					</div>
				}
				value={
					loading ? (
						<Skeleton className='h-6 w-16 rounded-[6.5px]' />
					) : (
						`${vatPrice} $`
					)
				}
			/>
			<CheckoutItemDetails
				title={
					<div className='flex items-center'>
						<Truck className='mr-3 text-gray-300' size={20} />
						Delivery:
					</div>
				}
				value={
					loading ? (
						<Skeleton className='h-6 w-10 rounded-[6.5px]' />
					) : (
						`${DELIVERY_PRICE} $`
					)
				}
			/>
			<Button
				type='submit'
				loading={loading}
				className='w-full h-14 rounded-2xl mt-6 text-base font-bold'
			>
				Go to order
				<ArrowRight className='w-5 ml-2' />
			</Button>
		</WhiteBlock>
	)
}
