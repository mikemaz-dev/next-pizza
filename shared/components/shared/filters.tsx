'use client'

import { Input } from '../ui'
import { CheckboxFiltersGroup } from './checkbox-filters-group'
import { RangeSlider } from './range-slider'
import { Title } from './title'
import { useFilters, useQueryFilters, UseIngredients } from '@/shared/hooks'

export interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	const { ingredients, loading } = UseIngredients()
	const filters = useFilters()

	useQueryFilters(filters)

	const items = ingredients.map(item => ({
		value: String(item.id),
		text: item.name,
	}))

	const updatePrices = (prices: number[]) => {
		filters.setPrices('priceFrom', prices[0])
		filters.setPrices('priceTo', prices[1])
	}

	return (
		<div className={className}>
			<Title text='Filtering' size='sm' className='mb-5 font-bold' />

			{/* Top checkboxes */}

			<CheckboxFiltersGroup
				title='Type of test'
				name='pizzaTypes'
				className='mb-5'
				onClickCheckbox={filters.setPizzaTypes}
				selected={filters.pizzaTypes}
				items={[
					{ text: 'Thin', value: '1' },
					{ text: 'Traditional', value: '2' },
				]}
			/>

			<CheckboxFiltersGroup
				title='Sizes'
				name='sizes'
				className='mb-5'
				onClickCheckbox={filters.setSizes}
				selected={filters.sizes}
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
						value={String(filters.prices.priceFrom)}
						onChange={e =>
							filters.setPrices('priceFrom', Number(e.target.value))
						}
					/>
					<Input
						type='number'
						min={50}
						max={500}
						placeholder='500'
						value={String(filters.prices.priceTo)}
						onChange={e => filters.setPrices('priceTo', Number(e.target.value))}
					/>
				</div>
				<RangeSlider
					min={0}
					max={500}
					step={10}
					value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 500]}
					onValueChange={updatePrices}
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
				onClickCheckbox={filters.setSelectedIngredients}
				selected={filters.selectedIngredients}
			/>
		</div>
	)
}
