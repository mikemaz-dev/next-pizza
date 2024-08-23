'use client'

import { Ingredient } from '@prisma/client'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui'
import { Title } from './title'
import { useRouter } from 'next/navigation'
import { useCartStore } from '@/shared/store'
import { ProductWithRelations } from '@/@types/prisma'
import toast from 'react-hot-toast'

interface Props {
	id: number
	name: string
	price: number
	imageUrl: string
	ingredients: Ingredient[]
	className?: string
}

export const ProductCard: React.FC<Props> = ({
	id,
	name,
	price,
	imageUrl,
	className,
	ingredients,
}) => {
	return (
		<div className={className}>
			<Link href={`/product/${id}`}>
				<div className='flex justify-center items-center p-6 bg-secondary rounded-lg h-[260px]'>
					<img src={imageUrl} alt={name} className='w-[215px] h-[215px]' />
				</div>
				<Title text={name} size='sm' className='mb-1 mt-3 font-bold' />
				<p className='text-sm text-gray-400'>
					{ingredients.map(ingredient => ingredient.name).join(', ')}
				</p>

				<div className='flex justify-between items-center mt-4'>
					<Button variant='outline' className='text-base font-bold'>
						<span className='text-[18px] font-medium'>
							from <b className='font-bold'>{price} $</b>
						</span>
					</Button>
				</div>
			</Link>
		</div>
	)
}
