import { CartDTO } from './dto/cart.dto'
import { AxiosInstance } from './instance'

export const getCart = async (): Promise<CartDTO> => {
	return (await AxiosInstance.get<CartDTO>('/cart')).data
}

export const updateItemQuantity = async (
	itemId: number,
	quantity: number
): Promise<CartDTO> => {
	return (
		await AxiosInstance.patch<CartDTO>(`/cart/${itemId}`, {
			quantity,
		})
	).data
}
export const removeCartItem = async (id: number): Promise<CartDTO> => {
	return (await AxiosInstance.delete<CartDTO>(`/cart/${id}`)).data
}
