import { ApiRoutes } from './constants'
import { Product } from '@prisma/client'
import { AxiosInstance } from './instance'
export const search = async (query: string): Promise<Product[]> => {
	return (
		await AxiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
			params: { query },
		})
	).data
}
