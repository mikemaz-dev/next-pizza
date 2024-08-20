'use client'

import { cn } from '@/shared/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { CartButton } from './cart-button'
import { Container } from './container'
import { ProfileButton } from './profile-button'
import { SearchInput } from './search-input'
import { AuthModal } from './modals'
import { FC, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

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
	const [openAuthModal, setOpenAuthModal] = useState(false)

	const router = useRouter()

	const searchParams = useSearchParams()

	useEffect(() => {
		let toastMessage = ''

		if (searchParams.has('verified')) {
			toastMessage = 'The mail has been successfully confirmed'
		}

		if (toastMessage) {
			setTimeout(() => {
				router.replace('/')
				toast.success(toastMessage, {
					duration: 3000,
				})
			}, 1000)
		}
	}, [])

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
					<AuthModal
						open={openAuthModal}
						onClose={() => setOpenAuthModal(false)}
					/>
					<ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
					{hasCart && <CartButton />}
				</div>
			</Container>
		</header>
	)
}
