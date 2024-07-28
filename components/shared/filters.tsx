'use client'

import { useFilterIngredients } from '@/hooks/useFilterIngredients'
import { Input } from '../ui'
import { CheckboxFiltersGroup } from './checkbox-filters-group'
import { FilterCheckbox } from './filter-checkbox'
import { RangeSlider } from './range-slider'
import { Title } from './title'
import { FC, useEffect, useState } from 'react'
import { useSet } from 'react-use'
import { type } from 'os'
import { title } from 'process'
import { text } from 'stream/consumers'

interface Props {
	className?: string
}

interface PriceProps {
	priceFrom: number
	priceTo: number
}

export const Filters: React.FC<Props> = ({ className }) => {
	const { ingredients, loading, onAddId, selectedIngredients } =
		useFilterIngredients()
	const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]))
	const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]))
	const [prices, setPrice] = useState<PriceProps>({
		priceFrom: 0,
		priceTo: 500,
	})

	const items = ingredients.map(item => ({
		value: String(item.id),
		text: item.name,
	}))

	const updatePrice = (name: keyof PriceProps, value: number) => {
		setPrice({
			...prices,
			[name]: value,
		})
	}

	useEffect(() => {
		console.log(prices, pizzaTypes, sizes, selectedIngredients)
	}, [prices, pizzaTypes, sizes, selectedIngredients])

	return (
		<div className={className}>
			<Title text='Filtering' size='sm' className='mb-5 font-bold' />

			{/* Top checkboxes */}

			<CheckboxFiltersGroup
				title='Type of test'
				name='pizzaTypes'
				className='mb-5'
				onClickCheckbox={togglePizzaTypes}
				selected={pizzaTypes}
				items={[
					{ text: 'Thin', value: '1' },
					{ text: 'Traditional', value: '2' },
				]}
			/>

			<CheckboxFiltersGroup
				title='Sizes'
				name='sizes'
				className='mb-5'
				onClickCheckbox={toggleSizes}
				selected={sizes}
				items={[
					{ text: '20 sm', value: '20' },
					{ text: '30 sm', value: '30' },
					{ text: '40 sm', value: '40' },
				]}
			/>

			{/* Price Filter */}
			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Price from and to</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={500}
						value={String(prices.priceFrom)}
						onChange={e => updatePrice('priceFrom', Number(e.target.value))}
					/>
					<Input
						type='number'
						min={50}
						max={500}
						placeholder='500'
						value={String(prices.priceTo)}
						onChange={e => updatePrice('priceTo', Number(e.target.value))}
					/>
				</div>
				<RangeSlider
					min={0}
					max={500}
					step={10}
					value={[prices.priceFrom, prices.priceTo]}
					onValueChange={([priceFrom, priceTo]) =>
						setPrice({ priceFrom, priceTo })
					}
				/>
			</div>
			<CheckboxFiltersGroup
				title='Ingredients:'
				name='ingredients'
				className='mt-5'
				limit={6}
				defaultItems={items.slice(0, 6)}
				items={items}
				loading={loading}
				onClickCheckbox={onAddId}
				selected={selectedIngredients}
			/>
		</div>
	)
}
