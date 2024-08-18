'use server'

import { prisma } from '@/prisma/prisma-client'
import { CheckoutFormValues } from '@/shared/components'
import { PayOrderTemplate } from '@/shared/components/shared/email-templates'
import { sendEmail } from '@/shared/lib'
import { OrderStatus } from '@prisma/client'
import { cookies } from 'next/headers'
export async function createOrder(data: CheckoutFormValues) {
	try {
		const cookieStore = cookies()
		const cartToken = cookieStore.get('cartToken')?.value

		if (!cartToken) {
			throw new Error('Cart token not found')
		}

		const userCart = await prisma.cart.findFirst({
			include: {
				user: true,
				items: {
					include: {
						ingredients: true,
						productItem: {
							include: {
								product: true,
							},
						},
					},
				},
			},
			where: {
				token: cartToken,
			},
		})

		if (userCart?.totalAmount === 0) {
			throw new Error('Cart is empty')
		}
		const order = await prisma.order.create({
			data: {
				token: cartToken,
				fullName: data.firstName + ' ' + data.lastName,
				email: data.email,
				phone: data.phone,
				address: data.address,
				comment: data.comment,
				totalAmount: userCart!.totalAmount,
				status: OrderStatus.PENDING,
				items: JSON.stringify(userCart!.items),
			},
		})
		await prisma.cart.update({
			where: {
				id: userCart?.id,
			},
			data: {
				totalAmount: 0,
			},
		})

		await prisma.cartItem.deleteMany({
			where: {
				cartId: userCart?.id,
			},
		})

		sendEmail(
			data.email,
			'Next Pizza | Pay the order #' + order.id,
			PayOrderTemplate({
				orderId: order.id,
				paymentUrl:
					'https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations',
				totalAmount: order.totalAmount,
			})
		)

		return '/'
	} catch (error) {
		console.log('[CreateOrder] Server error', error)
	}
}
