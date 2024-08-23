import {
	Container,
	Filters,
	ProductsGroupList,
	Title,
	TopBar,
	InstaStories,
} from '@/shared/components/shared'
import { findPizzas, GetSearchParams } from '@/shared/lib/find-pizza'
import { Suspense } from 'react'

export default async function Home({
	searchParams,
}: {
	searchParams: GetSearchParams
}) {
	const categories = await findPizzas(searchParams)
	return (
		<>
			<Container className='mt-10'>
				<Title
					text='All pizzas'
					size='lg'
					className='font-extrabold mb-5 max-lg:mb-0'
				/>
			</Container>
			<TopBar
				categories={categories.filter(category => category.products.length > 0)}
			/>
			<div className='max-lg:hidden'>
				<InstaStories />
			</div>

			<Container className='mt-10 pb-14'>
				<div className='flex justify-between gap-[80px]'>
					{/* Filtering */}
					<Suspense>
						<Filters className='w-[250px] max-lg:hidden' />
					</Suspense>
					{/* Products list */}
					<div className='flex-1'>
						<div className='flex flex-col max-lg:grid gap-16'>
							{categories.map(
								category =>
									category.products.length > 0 && (
										<ProductsGroupList
											key={category.id}
											title={category.name}
											categoryId={category.id}
											items={category.products}
										/>
									)
							)}
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
