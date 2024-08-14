import { cn } from '@/shared/lib/utils'
import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui'
import { CartButton } from './cart-button'
import { Container } from './container'
import { SearchInput } from './search-input'

interface Props {
	hasSearch?: boolean
	hasCart?: boolean
	className?: string
}

export const Header: React.FC<Props> = ({
	hasSearch = true,
	hasCart = true,
	className,
}) => {
	return (
		<header className={cn('border-b', className)}>
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
				{hasSearch && (
					<div className='mx-10 flex-1'>
						<SearchInput />
					</div>
				)}

				{/* Right side */}
				<div className='flex items-center gap-3'>
					<Button variant='outline' className='flex items-center gap-1'>
						<User size={16} />
						Sign up
					</Button>
					{hasCart && <CartButton />}
				</div>
			</Container>
		</header>
	)
}
