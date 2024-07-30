import { cn } from '@/lib/utils'
import React, { FC } from 'react'

interface Props {
	className?: string
	imageUrl: string
	size: number
}

export const ProductImage: React.FC<Props> = ({
	imageUrl,
	size,
	className,
}) => {
	return (
		<div
			className={cn(
				'bg-[#FFF7EE] rounded-[20px] flex items-center justify-center flex-1 relative w-full py-9',
				className
			)}
		>
			<img
				src={imageUrl}
				alt='Logo'
				className={cn(
					'relative left-2 top-2 transition-all z-10 duration-300',
					{
						'w-[300px] h-[300px]': size === 30,
						'w-[500px] h-[500px]': size === 40,
					}
				)}
			/>

			<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]' />
			<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]' />
		</div>
	)
}
