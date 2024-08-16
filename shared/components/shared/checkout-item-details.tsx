import { cn } from '@/shared/lib/utils'

interface Props {
	title?: React.ReactNode
	value?: React.ReactNode
	className?: string
}

export const CheckoutItemDetails: React.FC<Props> = ({
	title,
	value,
	className,
}) => {
	return (
		<div className={cn('flex gap-2 my-4', className)}>
			<span className='flex flex-1 gap-2 text-lg text-neutral-500'>
				{title}
				<div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 nx-2' />
			</span>
			<span className='font-bold text-lg'>{value}</span>
		</div>
	)
}
