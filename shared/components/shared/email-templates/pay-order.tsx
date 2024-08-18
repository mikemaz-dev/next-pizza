import * as React from 'react'

interface Props {
	orderId: number
	totalAmount: number
	paymentUrl: string
}

export const PayOrderTemplate: React.FC<Props> = ({
	orderId,
	paymentUrl,
	totalAmount,
}) => (
	<div>
		<h1>Order {orderId}</h1>

		<p>
			Pay for the order in the amount of <b>{totalAmount}</b>$. Follow{' '}
			<a href={paymentUrl}>this link</a> to pay for the order.
		</p>

		<p>
			P.S You can't pay for this order because the project is in the development
			stage.
		</p>

		<p>🍕NextPizza © 2024 All rights reserved</p>
	</div>
)
