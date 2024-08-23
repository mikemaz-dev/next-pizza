'use client'

import { cn } from '@/shared/lib/utils'
import { useCategorySore } from '@/shared/store/category'
import { Category } from '@prisma/client'
import React from 'react'

interface Props {
	items: Category[]
	className?: string
}

export const Categories: React.FC<Props> = ({ items, className }) => {
	const categoryActiveId = useCategorySore(state => state.activeId)
	return (
		<div
			className={cn(
				'inline-flex gap-1 bg-gray-50 p-1 rounded-2xl max-lg:grid max-lg:grid-cols-3',
				className
			)}
		>
			{items.map(({ name, id }, i) => (
				<a
					className={cn(
						'flex items-center justify-center font-bold h-11 rounded-2xl px-5',
						categoryActiveId === id &&
							'bg-white shadow-md shadow-gray-200 text-primary'
					)}
					href={`/#${name}`}
					key={i}
				>
					<button>{name}</button>
				</a>
			))}
		</div>
	)
}
