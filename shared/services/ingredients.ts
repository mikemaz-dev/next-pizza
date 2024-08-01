import { ApiRoutes } from './constants'
import { Ingredient } from '@prisma/client'
import { AxiosInstance } from './instance'
export const getAll = async (): Promise<Ingredient[]> => {
	return (await AxiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data
}
