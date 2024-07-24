import {
	Container,
	Filters,
	ProductsGroupList,
	Title,
	TopBar,
} from '@/components/shared'

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title text='All pizzas' size='lg' className='font-extrabold mb-5' />
			</Container>
			<TopBar />
			<Container className='mt-10 pb-14'>
				<div className='flex gap-[80px]'>
					{/* Filtering */}
					<div className='w-[250px]'>
						<Filters />
					</div>
					{/* Products list */}
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductsGroupList
								title='Pizzas'
								items={[
									{
										id: 1,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
									{
										id: 2,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
									{
										id: 3,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
									{
										id: 4,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
									{
										id: 5,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
									{
										id: 6,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
									{
										id: 7,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
									{
										id: 1,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
									{
										id: 8,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
									{
										id: 9,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
									{
										id: 10,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
								]}
								categoryId={1}
							/>
							<ProductsGroupList
								title='Combos'
								items={[
									{
										id: 1,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
									{
										id: 2,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
									{
										id: 3,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
									{
										id: 4,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
									{
										id: 5,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
									{
										id: 6,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
									{
										id: 7,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
									{
										id: 1,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
									{
										id: 8,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
									{
										id: 9,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
									{
										id: 10,
										name: 'Hawaiian',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF45FDF8D3091A8826B43F4026BAB.avif',
										items: [{ price: 15 }],
									},
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
