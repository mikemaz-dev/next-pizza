import { cn } from '@/shared/lib/utils'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui'
import { Container } from './container'
import { SearchInput } from './search-input'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn('border border-b', className)}>
			<Container className='flex items-center justify-between py-8'>
				{/* Left side */}
				<Link
					href='/'
					className='flex items-center gap-4 transition-opacity hover:opacity-60'
				>
					<Image src='/logo.png' alt='Logo' width={35} height={35} />
					<div className=''>
						<h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
						<p className='text-sm text-gray-400 leading-3'>
							the most delicious pizzas
						</p>
					</div>
				</Link>

				<div className='mx-10 flex-1'>
					<SearchInput />
				</div>

				{/* Right side */}
				<div className='flex items-center gap-3'>
					<Button variant='outline' className='flex items-center gap-1'>
						<User size={16} />
						Sign in
					</Button>

					<div className='group relative'>
						<Button>
							<b>15$</b>
							<span className='h-full w-[1px] bg-white/30 mx-3' />
							<div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
								<ShoppingCart size={16} className='relative' strokeWidth={2} />
								<b>3</b>
							</div>
							<ArrowRight className='w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' />
						</Button>
					</div>
				</div>
			</Container>
		</header>
	)
}
