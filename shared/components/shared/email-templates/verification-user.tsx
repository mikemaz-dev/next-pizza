import React from 'react'

interface Props {
	code: string
}

export const VerificationUserTemplate: React.FC<Props> = ({ code }) => {
	return (
		<div>
			<h2>
				Confirmation code: <b>{code}</b>
			</h2>

			<p>
				<a
					href={`http://next-pizza-7zt4-nine.vercel.app/api/auth/verify?code=${code}`}
				>
					Confirm registration
				</a>
			</p>

			<p>🍕NextPizza © 2024 All rights reserved</p>
		</div>
	)
}
