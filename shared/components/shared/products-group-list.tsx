'use client'

import { useIntersection } from 'react-use'

import { cn } from '@/shared/lib/utils'
import { useCategorySore } from '@/shared/store/category'
import { useEffect, useRef } from 'react'
import { ProductCard } from './product-card'
import { Title } from './title'
import { ProductWithRelations } from '@/@types/prisma'

interface Props {
	title: string
	items: ProductWithRelations[]
	categoryId: number
	listClassName?: string
	className?: string
}

export const ProductsGroupList: React.FC<Props> = ({
	title,
	items,
	categoryId,
	listClassName,
	className,
}) => {
	const setActiveCategoryId = useCategorySore(state => state.setActiveId)
	const intersectionRef = useRef(null)
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	})

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [categoryId, intersection?.isIntersecting, title])

	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size='lg' className='font-extrabold mb-5' />

			<div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
				{items.map((product, i) => (
					<ProductCard
						key={i}
						id={product.id}
						name={product.name}
						price={product.items[0].price}
						imageUrl={product.imageUrl}
						ingredients={product.ingredients}
					/>
				))}
			</div>
		</div>
	)
}
