import { cn } from '@/shared/lib/utils'

import { CartItemProps } from './cart-item-details/cart-item-details.types'

import * as CartItem from './cart-item-details'
import { CountButton } from './count-button'
import { Trash2Icon } from 'lucide-react'

interface Props extends CartItemProps {
	className?: string
}

export const CartDrawerItem: React.FC<Props> = ({
	id,
	imageUrl,
	name,
	price,
	quantity,
	details,
	disabled,
	onClickCountButton,
	onClickRemove,
	className,
}) => {
	return (
		<div
			className={cn(
				'flex bg-white rounded-md p-5 gap-6',
				{
					'opacity-50 pointer-events-none': disabled,
				},
				className
			)}
		>
			<CartItem.Image src={imageUrl} />
			<div className='flex-1'>
				<CartItem.Info name={name} details={details} />
				<hr className='my-3' />
				<div className='flex items-center justify-between'>
					<CountButton onClick={onClickCountButton} value={quantity} />
					<div className='flex items-center gap-3'>
						<CartItem.Price value={price} />
						<Trash2Icon
							onClick={onClickRemove}
							className='text-gray-400 cursor-pointer transition-colors hover:text-gray-600'
							size={16}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
