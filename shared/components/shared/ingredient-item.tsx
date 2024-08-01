import { cn } from '@/shared/lib/utils'
import { CircleCheck } from 'lucide-react'
import React from 'react'

interface Props {
	imageUrl: string
	name: string
	price: number
	active?: boolean
	onClick?: () => void
	className?: string
}

export const IngredientItem: React.FC<Props> = ({
	imageUrl,
	name,
	price,
	active,
	onClick,
	className,
}) => {
	return (
		<div
			className={cn(
				'flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white transition-all duration-200',
				{ 'border border-white': !active },
				{ 'border border-primary': active },
				className
			)}
			onClick={onClick}
		>
			<CircleCheck
				className={cn(
					'absolute top-2 right-2 text-primary opacity-0 transition-opacity duration-200 ease-out',
					{ 'opacity-1': active }
				)}
			/>
			<img width={110} height={110} src={imageUrl} alt='' />
			<span className='text-xs mb-1'>{name}</span>
			<span className='font-bold'>{price} $</span>
		</div>
	)
}
