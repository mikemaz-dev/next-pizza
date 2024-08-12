import { cn } from '@/shared/lib/utils'
import React, { FC } from 'react'
import { Button } from '../ui'
import { Title } from './title'

interface Props {
	imageUrl: string
	name: string
	price: number
	loading?: boolean
	onSubmit?: (itemId?: number, ingredients?: number[]) => void
	className?: string
}

/**
 * Choose Product Form
 */

export const ChooseProductForm: React.FC<Props> = ({
	imageUrl,
	name,
	price,
	loading,
	onSubmit,
	className,
}) => {
	return (
		<div className={cn('flex flex-1', className)}>
			<div className='flex items-center justify-center flex-1 relative w-full'>
				<img
					src={imageUrl}
					alt={name}
					className='relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]'
				/>
			</div>
			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text={name} size='md' className='font-extrabold mb-1' />
				<Button
					loading={loading}
					onClick={() => onSubmit?.()}
					className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
				>
					Add to cart for {price} $
				</Button>
			</div>
		</div>
	)
}
