'use client'

import { ProductWithRelations } from '@/@types/prisma'
import { useCartStore } from '@/shared/store'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { ChoosePizzaForm } from './choose-pizza-form'
import { ChooseProductForm } from './choose-product-form'

interface Props {
	product: ProductWithRelations
	className?: string
}

export const SwitchProductForm: React.FC<Props> = ({ product, className }) => {
	const [addCartItem, loading] = useCartStore(state => [
		state.addCartItem,
		state.loading,
	])
	const firstItem = product.items[0]
	const isPizzaForm = Boolean(firstItem.pizzaType)
	const router = useRouter()

		const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
			try {
				const itemId = productItemId ?? firstItem.id
				await addCartItem({
					productItemId: itemId,
					ingredients,
				})
				toast.success(`${product.name} added to cart`)
				router.back()
			} catch (error) {
				toast.error(`Couldn't add ${product.name} to cart`)
				console.error(error)
			}
		}

	if (isPizzaForm) {
		return (
			<ChoosePizzaForm
				imageUrl={product.imageUrl}
				name={product.name}
				ingredients={product.ingredients}
				items={product.items}
				onSubmit={onSubmit}
				loading={loading}
			/>
		)
	}

	return (
		<ChooseProductForm
			imageUrl={product.imageUrl}
			name={product.name}
			price={firstItem.price}
			onSubmit={onSubmit}
			loading={loading}
		/>
	)
}
