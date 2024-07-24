import { Input } from '../ui'
import { CheckboxFiltersGroup } from './checkbox-filters-group'
import { FilterCheckbox } from './filter-checkbox'
import { RangeSlider } from './range-slider'
import { Title } from './title'

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Title text='Filtering' size='sm' className='mb-5 font-bold' />

			{/* Top checkboxes */}

			<div className='flex flex-col gap-4'>
				<FilterCheckbox text='Can collect' value='1' />
				<FilterCheckbox text='New products' value='2' />
			</div>

			{/* Price Filter */}
			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Price from and to</p>
				<div className='flex gap-3 mb-5'>
					<Input type='number' placeholder='0 $' min={0} max={1000} />
					<Input type='number' min={100} max={1000} placeholder='1000 $' />
				</div>
				<RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
			</div>
			<CheckboxFiltersGroup
				title='Ingredients:'
				className='mt-5'
				limit={6}
				defaultItems={[
					{
						text: 'Cheese sauce',
						value: '1',
					},
					{
						text: 'Mozzarella',
						value: '2',
					},
					{
						text: 'Garlic',
						value: '3',
					},
					{
						text: 'Pickles',
						value: '4',
					},
					{
						text: 'Red Onion',
						value: '5',
					},
					{
						text: 'Tomatoes',
						value: '6',
					},
				]}
				items={[
					{
						text: 'Cheese sauce',
						value: '1',
					},
					{
						text: 'Mozzarella',
						value: '2',
					},
					{
						text: 'Garlic',
						value: '3',
					},
					{
						text: 'Pickles',
						value: '4',
					},
					{
						text: 'Red Onion',
						value: '5',
					},
					{
						text: 'Tomatoes',
						value: '6',
					},
					{
						text: 'Garlic',
						value: '3',
					},
					{
						text: 'Pickles',
						value: '4',
					},
					{
						text: 'Red Onion',
						value: '5',
					},
					{
						text: 'Tomatoes',
						value: '6',
					},
					{
						text: 'Garlic',
						value: '3',
					},
					{
						text: 'Pickles',
						value: '4',
					},
					{
						text: 'Red Onion',
						value: '5',
					},
					{
						text: 'Tomatoes',
						value: '6',
					},
				]}
			/>
		</div>
	)
}
