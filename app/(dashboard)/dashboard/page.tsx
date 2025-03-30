import { Container } from '@/shared/components'
import Link from 'next/link'
import Image from 'next/image'

export default function Dashboard() {
	return (
		<Container className='flex gap-5 mt-5'>
			<div className='bg-[#f2f2f2] rounded-md w-72 h-72'>
				<h2>Profile</h2>
			</div>
			<div className='grid'>
				<div className='flex gap-5'>
					<div className='bg-[#f2f2f2] rounded-md w-48 h-48'>
						<h2>Products in cart</h2>
					</div>
					<div className='bg-[#f2f2f2] rounded-md w-48 h-48'>
						<h2>Number of orders</h2>
					</div>
				</div>
				<div className='flex items-center justify-between'>
					<div className="">
					<Link
						href='/'
						className='flex items-center gap-4 transition-opacity hover:opacity-60'
					>
						<Image src='/logo.png' alt='Logo' width={35} height={35} />
						<div className=''>
							<h1 className='text-2xl max-lg:text-sm uppercase font-black'>
								Next Pizza
							</h1>
							<p className='text-sm text-gray-400 leading-3'>
								the most delicious pizzas
							</p>
						</div>
					</Link>
					</div>
					<div className="">
						<p>The best pizza shop in the world</p>
					</div>
				</div>
			</div>
		</Container>
	)
}
