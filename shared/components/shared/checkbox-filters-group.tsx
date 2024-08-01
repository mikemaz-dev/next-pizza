'use client'

import { ChangeEvent, FC, useState } from 'react'
import { Input, Skeleton } from '../ui'
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox'
import { Title } from './title'
import { useSet } from 'react-use'

type Item = FilterCheckboxProps

interface Props {
	title: string
	items: Item[]
	defaultItems?: Item[]
	limit?: number
	loading?: boolean
	searchInputPlaceholder?: string
	onClickCheckbox?: (id: string) => void
	defaultValue?: string[]
	selected?: Set<string>
	className?: string
	name?: string
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	loading,
	searchInputPlaceholder = 'Search...',
	onClickCheckbox,
	defaultValue,
	selected,
	className,
	name,
}) => {
	const [showAll, setShowAll] = useState(false)
	const [searchValue, setSearchValue] = useState('')

	const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	if (loading) {
		return (
			<div className={className}>
				<Title text={title} size='sm' className='mb-5 font-bold' />

				{...Array(limit)
					.fill(0)
					.map((_, i) => (
						<Skeleton key={i} className='h-6 mb-4 rounded-[8px]' />
					))}

				<Skeleton className='w-24 h-6 mb-4 rounded-[8px]' />
			</div>
		)
	}

	const list = showAll
		? items.filter(item =>
				item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
		  )
		: (defaultItems || items).slice(0, limit)

	return (
		<div className={className}>
			<Title text={title} size='sm' className='mb-5 font-bold' />

			{showAll && (
				<div className='mb-5'>
					<Input
						onChange={onChangeSearchValue}
						placeholder={searchInputPlaceholder}
						className='bg-gray-50 border-none my-4'
					/>
				</div>
			)}

			<div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
				{list.map((item, i) => (
					<FilterCheckbox
						key={i}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						checked={selected?.has(item.value)}
						onCheckedChange={() => onClickCheckbox?.(item.value)}
						name={name}
					/>
				))}
			</div>

			{items.length > limit && (
				<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
					<button
						onClick={() => setShowAll(!showAll)}
						className='text-primary mt-3'
					>
						{showAll ? '- Hide' : '+ Show all'}
					</button>
				</div>
			)}
		</div>
	)
}
