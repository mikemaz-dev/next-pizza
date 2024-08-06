import { Ingredient, ProductItem } from '@prisma/client'
import { calcTotalPizzaPrice } from './calc-total-pizza-price'
import { PizzaType, PizzaSize, mapPizzaType } from '../constants/pizza'

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

	const textDetails = `${size} sm, ${mapPizzaType[type]} pizza`
	return { totalPrice, textDetails }
}
