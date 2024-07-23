import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Container } from './container'
import { Button } from '../ui'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn('border border-b', className)}>
			<Container className='flex items-center justify-between py-8'>
				{/* Left side */}
				<div className='flex items-center gap-4'>
					<Image src='/logo.png' alt='Logo' width={35} height={35} />
					<div className=''>
						<h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
						<p className='text-sm text-gray-400 leading-3'>
							the most delicious pizzas
						</p>
					</div>
				</div>
				{/* Right side */}
				<div className='flex items-center gap-3'>
					<Button variant='outline'>Sign in</Button>
				</div>
			</Container>
		</header>
	)
}
