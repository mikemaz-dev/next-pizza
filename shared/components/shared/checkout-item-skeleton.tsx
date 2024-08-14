import React from 'react'
import { Skeleton } from '../ui'
import { cn } from '@/shared/lib/utils'
import { X } from 'lucide-react'

interface Props {
	className?: string
}

export const CheckoutItemSkeleton: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('flex items-center justify-between', className)}>
			<div className='flex items-center gap-5'>
				<Skeleton className='w-[50px] h-[50px] bg-gray-200 rounded-full' />
				<div className='flex flex-col gap-2'>
					<Skeleton className='w-40 h-5 bg-gray-200 rounded' />
					<Skeleton className='w-80 h-5 bg-gray-200 rounded' />
				</div>
			</div>
			<Skeleton className='h-5 w-10 bg-gray-200 rounded' />
			<Skeleton className='h-8 w-[133px] bg-gray-200 rounded' />
		</div>
	)
}
