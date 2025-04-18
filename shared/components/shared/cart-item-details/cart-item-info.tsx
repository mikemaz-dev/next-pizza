import { cn } from '@/shared/lib/utils'

interface Props {
	name: string
	details: string
	className?: string
}

export const CartItemInfo: React.FC<Props> = ({ details, name, className }) => {
	return (
		<div>
			<div className={cn('flex items-center justify-between', className)}>
				<h2 className='text-lg font-bold flex-1 leading-6'>{name}</h2>
			</div>
			{details && <p className='text-xs text-gray-400 w-[70%] mt-1'>{details}</p>}
		</div>
	)
}
