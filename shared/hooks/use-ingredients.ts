import { Api } from '@/shared/services/api-client'
import { Ingredient } from '@prisma/client'
import { useEffect, useState } from 'react'

export const UseIngredients = () => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		async function fetchIngredients() {
			try {
				setLoading(true)
				const ingredients = await Api.ingredients.getAll()
				setIngredients(ingredients)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}
		fetchIngredients()
	}, [])

	return {
		ingredients,
		loading,
	}
}
