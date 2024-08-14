'use client'

import {
	CheckoutItem,
	CheckoutSidebar,
	Container,
	Title,
	WhiteBlock,
} from '@/shared/components/shared'
import { Input, Textarea } from '@/shared/components/ui'
import { PizzaType, PizzaSize } from '@/shared/constants/pizza'
import { useCart } from '@/shared/hooks'
import { getCartItemDetails } from '@/shared/lib'

export default function CheckoutPage() {
	const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart()

	const onClickCountButton = (
		id: number,
		quantity: number,
		type: 'plus' | 'minus'
	) => {
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
		updateItemQuantity(id, newQuantity)
	}

	return (
		<Container className='mt-12'>
			<Title text='Checkout' className='font-extrabold mb-8 text-[36px]' />
			<div className='flex gap-10'>
				<div className='flex flex-col gap-10 flex-1 mb-20'>
					<WhiteBlock title='1. Cart'>
						<div className='flex flex-col gap-7'>
							{items.map(item => (
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

					<WhiteBlock title='2. Personal info'>
						<div className='grid grid-cols-2 gap-5'>
							<Input
								name='firstName'
								className='text-base'
								placeholder='Name'
							/>
							<Input
								name='lastName'
								className='text-base'
								placeholder='Surname'
							/>
							<Input name='email' className='text-base' placeholder='Email' />
							<Input name='phone' className='text-base' placeholder='Phone' />
						</div>
					</WhiteBlock>
					<WhiteBlock title='2. Delivery address'>
						<div className='flex flex-col gap-5'>
							<Input
								name='Enter address'
								className='text-base'
								placeholder='Name'
							/>
							<Textarea
								className='text-base'
								placeholder='Specify here additional information for the courier'
								rows={5}
							/>
						</div>
					</WhiteBlock>
				</div>
				<div className='w-[450px]'>
					<CheckoutSidebar totalAmount={totalAmount} />
				</div>
			</div>
		</Container>
	)
}
