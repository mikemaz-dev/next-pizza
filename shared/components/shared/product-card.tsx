import { Title } from './title'
import Link from 'next/link'
import React, { FC } from 'react'
import { Button } from '../ui'
import { Plus } from 'lucide-react'
import { Ingredient } from '@prisma/client'
import { ingredients } from '@/prisma/constants'
import { text } from 'stream/consumers'
import { isArray } from 'util'

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
				<div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
					<img src={imageUrl} alt={name} className='w-[215px] h-[215px]' />
				</div>
				<Title text={name} size='sm' className='mb-1 mt-3 font-bold' />
				<p className='text-sm text-gray-400'>
					{ingredients.map(ingredient => ingredient.name).join(', ')}
				</p>

				<div className='flex justify-between items-center mt-4'>
					<span className='text-[20px]'>
						from <b className='font-bold'>{price} $</b>
					</span>
					<Button variant='secondary' className='text-base font-bold'>
						<Plus size={20} className='mr-1' />
						Add
					</Button>
				</div>
			</Link>
		</div>
	)
}
