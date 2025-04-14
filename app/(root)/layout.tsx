import { Header } from '@/shared/components/shared'
import type { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'Next Pizza | Home',
}

export default function HomeLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode
	modal: React.ReactNode
}>) {
	return (
		<main className='min-h-screen max-lg:p-4'>
			<Suspense>
				<Header />
			</Suspense>
			{children}
			{modal}
		</main>
	)
}
