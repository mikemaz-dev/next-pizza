import { PizzaType, PizzaSize } from '@/shared/constants/pizza'
import { getCartItemDetails } from '@/shared/lib'
import { CheckoutItem } from '../checkout-item'
import { WhiteBlock } from '../white-block'
import { CartStateItem } from '@/shared/lib/get-cart-details'
import { CheckoutItemSkeleton } from '../checkout-item-skeleton'

interface Props {
	items: CartStateItem[]
	onClickCountButton: (
		id: number,
		quantity: number,
		type: 'plus' | 'minus'
	) => void
	removeCartItem: (id: number) => void
	loading?: boolean
	className?: string
}

export const CheckoutCart: React.FC<Props> = ({
	items,
	onClickCountButton,
	removeCartItem,
	className,
	loading,
}) => {
	return (
		<WhiteBlock title='1. Cart' className={className}>
			<div className='flex flex-col gap-7'>
				{loading
					? [...Array(4)].map((_, i) => <CheckoutItemSkeleton key={i} />)
					: items.map(item => (
							<CheckoutItem
								id={item.id}
								imageUrl={item.imageUrl}
								details={getCartItemDetails(
									item.ingredients,
									item.pizzaType as PizzaType,
									item.pizzaSize as PizzaSize
								)}
								disabled={item.disabled}
								name={'Chorizo fresh'}
								price={item.price}
								quantity={item.quantity}
								onClickCountButton={type =>
									onClickCountButton(item.id, item.quantity, type)
								}
								onClickRemove={() => removeCartItem(item.id)}
							/>
					  ))}
			</div>
		</WhiteBlock>
	)
}
