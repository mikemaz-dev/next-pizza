import { Ingredient, ProductItem } from '@prisma/client'
import { PizzaSize, PizzaType } from '../constants/pizza'

/**
 * Function for calculate total pizza price
 * @example ```calcTotalPizzaPrice(1, 20, items, ingredients, selectedIngredients)```
 *
 * @param type - type of dough for selected pizza
 * @param size - size of selected pizza
 * @param items - variations list
 * @param ingredients - ingredients list
 * @param selectedIngredients - selected ingredients
 * @returns number total pizza price
 */
export const calcTotalPizzaPrice = (
	type: PizzaType,
	size: PizzaSize,
	items: ProductItem[],
	ingredients: Ingredient[],
	selectedIngredients: Set<number>
) => {
	const pizzaPrice =
		items.find(item => item.pizzaType === type && item.size === size)?.price ||
		0
	const totalIngredientsPrice = ingredients
		.filter(ingredient => selectedIngredients.has(ingredient.id))
		.reduce((acc, ingredient) => acc + ingredient.price, 0)
	return pizzaPrice + totalIngredientsPrice
}
