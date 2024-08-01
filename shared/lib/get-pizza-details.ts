import { Ingredient, ProductItem } from '@prisma/client'
import { calcTotalPizzaPrice } from './calc-total-pizza-price'
import { PizzaType, PizzaSize, mapPizzaTypes } from '../constants/pizza'

export const getPizzaDetails = (
	type: PizzaType,
	size: PizzaSize,
	items: ProductItem[],
	ingredients: Ingredient[],
	selectedIngredients: Set<number>
) => {
	const totalPrice = calcTotalPizzaPrice(
		type,
		size,
		items,
		ingredients,
		selectedIngredients
	)

	const textDetails = `${size} sm, ${mapPizzaTypes[type]} pizza`
	return { totalPrice, textDetails }
}
