import { cn } from '@/lib/utils'
import { Container } from './container'
import { Categories } from './categories'
import { SortPopup } from './sort-popup'
import { Category } from '@prisma/client'

interface Props {
	categories: Category[]
	className?: string
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
	return (
		<div
			className={cn(
				'sticky top-0 bg-white/75 py-5 shadow-lg shadow-black/5 backdrop-blur-lg backdrop-saturate-150 z-10',
				className
			)}
		>
			<Container className='flex items-center justify-between'>
				<Categories items={categories} />
				<SortPopup />
			</Container>
		</div>
	)
}
