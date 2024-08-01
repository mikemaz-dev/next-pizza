'use client'

import { ProductWithRelations } from '@/@types/prisma'
import { Dialog, DialogContent } from '@/shared/components/ui/dialog'
import { cn } from '@/shared/lib/utils'
import { useRouter } from 'next/navigation'
import { ChoosePizzaForm } from '../choose-pizza-form'
import { ChooseProductForm } from '../choose-product-form'

interface Props {
	product: ProductWithRelations
	className?: string
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
	const router = useRouter()
	const isPizzaForm = Boolean(product.items[0].pizzaType)
	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					'p-0 w-[1060px] max-w-[1060px] min-h-[502px] bg-white overflow-hidden',
					className
				)}
			>
				{isPizzaForm ? (
					<ChoosePizzaForm
						imageUrl={product.imageUrl}
						name={product.name}
						ingredients={product.ingredients}
						items={product.items}
						onClickAdd
					/>
				) : (
					<ChooseProductForm imageUrl={product.imageUrl} name={product.name} />
				)}
			</DialogContent>
		</Dialog>
	)
}
