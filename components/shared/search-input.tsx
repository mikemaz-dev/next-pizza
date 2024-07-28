'use client'

import { cn } from '@/lib/utils'
import { Api } from '@/services/api-client'
import { Product } from '@prisma/client'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { type } from 'os'
import { FC, useEffect, useRef, useState } from 'react'
import { useClickAway, useDebounce } from 'react-use'

interface Props {
	className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
	const [searchQuery, setSearchQuery] = useState('')
	const [products, setProducts] = useState<Product[]>([])
	const [focused, setFocused] = useState(false)
	const ref = useRef(null)

	useClickAway(ref, () => setFocused(false))

	useDebounce(
		async () => {
			try {
				const response = await Api.products.search(searchQuery)
				setProducts(response)
			} catch (error) {
				console.log(error)
			}
		},
		250,
		[searchQuery]
	)

	const onCLickItem = () => {
		setFocused(false)
		setSearchQuery('')
		setProducts([])
	}

	return (
		<>
			{focused && (
				<div className='fixed top-0 bottom-0 left-0 right-0 bg-black/50 z-30' />
			)}
			<div
				ref={ref}
				className={cn('flex rounded-2xl flex-1 relative h-11 z-30', className)}
			>
				<Search className='text-gray-400 absolute top-1/2 translate-y-[-50%] left-3 h-5 ' />
				<input
					type='text'
					className='bg-gray-100 outline-none rounded-2xl w-full pl-11'
					placeholder='Search pizza...'
					onFocus={() => setFocused(true)}
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>

				{products.length > 0 && (
					<div
						className={cn(
							'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-300 invisible opacity-0 z-30',
							focused && 'visible opacity-100 top-12'
						)}
					>
						<div className='px-3 py-2 hove:bg-primary/10'>
							{products.map(product => (
								<Link
									onClick={onCLickItem}
									key={product.id}
									href={`/product/${product.id}`}
									className='flex items-center gap-3 px-3 py-2 hover:bg-primary/10'
								>
									<img
										src={product.imageUrl}
										className='h-8 w-8 rounded-sm'
										alt='Pizza 1'
									/>
									<span>{product.name}</span>
								</Link>
							))}
						</div>
					</div>
				)}
			</div>
		</>
	)
}
