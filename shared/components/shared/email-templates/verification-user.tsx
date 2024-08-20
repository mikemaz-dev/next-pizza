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
				<a href={`http://localhost:3000/api/auth/verify?code=${code}`}>
					Confirm registration
				</a>
			</p>

			<p>🍕NextPizza © 2024 All rights reserved</p>
		</div>
	)
}
