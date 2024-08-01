import { cn } from '@/shared/lib/utils'
import React, { useState } from 'react'
import { Button } from '../ui'
import { PizzaImage } from './pizza-image'
import { Title } from './title'
import { GroupVariants } from './group-variants'
import {
	PizzaSize,
	pizzaSizes,
	PizzaType,
	pizzaTypes,
} from '@/shared/constants/pizza'
import { Ingredient, ProductItem } from '@prisma/client'
import { IngredientItem } from './ingredient-item'
import { useSet } from 'react-use'

interface Props {
	imageUrl: string
	name: string
	ingredients: Ingredient[]
	items: ProductItem[]
	onClickAddCard?: VoidFunction
	className?: string
}

export const ChoosePizzaForm: React.FC<Props> = ({
	imageUrl,
	name,
	ingredients,
	items,
	onClickAddCard,
	className,
}) => {
	const [size, setSize] = useState<PizzaSize>(20)
	const [type, setType] = useState<PizzaType>(1)

	const [selectedIngredients, { toggle: addIngredient }] = useSet(
		new Set<number>([])
	)

	const textDetails = `${size} sm, dough dough ${size}`

	const pizzaPrice =
		items.find(item => item.pizzaType === type && item.size === size)?.price ||
		0
	const totalIngredientsPrice = ingredients
		.filter(ingredient => selectedIngredients.has(ingredient.id))
		.reduce((acc, ingredient) => acc + ingredient.price, 0)
	const totalPrice = pizzaPrice + totalIngredientsPrice

	return (
		<div className={cn('flex flex-1', className)}>
			<PizzaImage imageUrl={imageUrl} size={size} />
			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text={name} size='md' className='font-extrabold mb-1' />

				<p className='text-gray-400'>{textDetails}</p>

				<div className='flex flex-col gap-5 mt-5'>
					<GroupVariants
						items={pizzaSizes}
						value={String(size)}
						onClick={value => setSize(Number(value) as PizzaSize)}
					/>
					<GroupVariants
						items={pizzaTypes}
						value={String(type)}
						onClick={value => setType(Number(value) as PizzaType)}
					/>
				</div>
				<div className='bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5'>
					<div className='grid grid-cols-3 gap-3'>
						{ingredients.map(ingredient => (
							<IngredientItem
								key={ingredient.id}
								name={ingredient.name}
								price={ingredient.price}
								imageUrl={ingredient.imageUrl}
								onClick={() => addIngredient(ingredient.id)}
								active={selectedIngredients.has(ingredient.id)}
							/>
						))}
					</div>
				</div>

				<Button className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
					Add to cart for {totalPrice} $
				</Button>
			</div>
		</div>
	)
}
