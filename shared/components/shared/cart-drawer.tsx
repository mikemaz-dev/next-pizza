'use client'

import React, { PropsWithChildren, useEffect } from 'react'

import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/shared/components/ui/sheet'
import Link from 'next/link'
import { Button } from '../ui'
import { ArrowRight } from 'lucide-react'
import { CartDrawerItem } from './cart-drawer-item'
import { getCartItemDetails } from '@/shared/lib'
import { useCartStore } from '@/shared/store'
import { PizzaSize, PizzaType } from '@/shared/constants/pizza'
import { stat } from 'fs'

interface Props {
	className?: string
}

export const CartDrawer: React.FC<PropsWithChildren<Props>> = ({
	children,
	className,
}) => {
	const [
		totalAmount,
		fetchCartItems,
		updateItemQuantity,
		removeCartItem,
		items,
	] = useCartStore(state => [
		state.totalAmount,
		state.fetchCartItems,
		state.updateItemQuantity,
		state.removeCartItem,
		state.items,
	])

	useEffect(() => {
		fetchCartItems()
	}, [])

	const onClickCountButton = (
		id: number,
		quantity: number,
		type: 'plus' | 'minus'
	) => {
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
		updateItemQuantity(id, newQuantity)
	}

	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent className='flex flex-col justify-between pb-0 bg-[#F4F1EE]'>
				<SheetHeader>
					<SheetTitle>
						<span className='font-bold'>{items.length} items</span> in your cart
					</SheetTitle>
				</SheetHeader>
				<div className='-mx-4 gap-2 mt-5 scrollbar flex-1 overflow-auto'>
					<div className='mb-2'>
						{items.map(item => (
							<CartDrawerItem
								key={item.id}
								id={item.id}
								imageUrl={item.imageUrl}
								details={
									item.pizzaSize && item.pizzaType
										? getCartItemDetails(
												item.ingredients,
												item.pizzaType as PizzaType,
												item.pizzaSize as PizzaSize
										  )
										: ''
								}
								name={item.name}
								price={item.price}
								quantity={item.quantity}
								onClickCountButton={type =>
									onClickCountButton(item.id, item.quantity, type)
								}
								onClickRemove={() => removeCartItem(item.id)}
							/>
						))}
					</div>
				</div>
				{/* Items */}
				<SheetFooter className='-mx-6 bg-white p-8 rounded-t-md'>
					<div className='w-full'>
						<div className='flex mb-4'>
							<span className='flex flex-1 text-lg text-neutral-500'>
								Total
								<div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
							</span>
							<span className='font-bold text-lg'>${totalAmount} $</span>
						</div>
						<Link href='/cart'>
							<Button type='submit' className='w-full h-12 text-base'>
								Checkout
								<ArrowRight className='w-5 ml-2' />
							</Button>
						</Link>
					</div>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
