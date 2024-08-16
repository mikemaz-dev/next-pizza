'use client'

import { CheckoutSidebar, Container, Title } from '@/shared/components/shared'
import { useCart } from '@/shared/hooks'

import {
	CheckoutAddressForm,
	CheckoutCart,
	checkoutFormSchema,
	CheckoutPersonalInfo,
} from '@/shared/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { CheckoutFormValues } from '@/shared/components'

export default function CheckoutPage() {
	const { totalAmount, updateItemQuantity, items, removeCartItem, loading } =
		useCart()

	const form = useForm<CheckoutFormValues>({
		resolver: zodResolver(checkoutFormSchema),
		defaultValues: {
			email: '',
			firstName: '',
			lastName: '',
			phone: '',
			address: '',
			comment: '',
		},
	})

	const onClickCountButton = (
		id: number,
		quantity: number,
		type: 'plus' | 'minus'
	) => {
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
		updateItemQuantity(id, newQuantity)
	}

	const onSubmit = (data: CheckoutFormValues) => {
		console.log(data)
	}

	return (
		<Container className='mt-12'>
			<Title text='Checkout' className='font-extrabold mb-8 text-[36px]' />
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className='flex gap-10'>
						<div className='flex flex-col gap-10 flex-1 mb-20'>
							<CheckoutCart
								onClickCountButton={onClickCountButton}
								removeCartItem={removeCartItem}
								items={items}
								loading={loading}
							/>
							<CheckoutPersonalInfo
								className={loading ? 'opacity-40 pointer-events-none' : ''}
							/>
							<CheckoutAddressForm
								className={loading ? 'opacity-40 pointer-events-none' : ''}
							/>
						</div>
						<div className='w-[450px]'>
							<CheckoutSidebar totalAmount={totalAmount} loading={loading} />
						</div>
					</div>
				</form>
			</FormProvider>
		</Container>
	)
}
