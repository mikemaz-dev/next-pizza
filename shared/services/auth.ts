import { User } from '@prisma/client'
import { AxiosInstance } from './instance'

export const getMe = async () => {
	const { data } = await AxiosInstance.get<User>('/auth/me')

	return data
}
