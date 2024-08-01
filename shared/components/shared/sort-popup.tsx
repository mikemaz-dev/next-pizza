import { cn } from '@/shared/lib/utils'
import { ArrowUpDown } from 'lucide-react'
import React from 'react'

interface Props {
	className?: string
}

export const SortPopup: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				'inline-flex items-center gap-1 bg-gray-50 py-4 px-5 rounded-2xl cursor-pointer transition duration-300 hover:bg-gray-100',
				className
			)}
		>
			<ArrowUpDown size={16} />
			<b>Sort by: </b>
			<b className='text-primary'>popular</b>
		</div>
	)
}
