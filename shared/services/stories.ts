import { Story, StoryItem } from '@prisma/client'
import { AxiosInstance } from './instance'

export type IStory = Story & {
	items: StoryItem[]
}

export const getAll = async () => {
	const { data } = await AxiosInstance.get<IStory[]>('/stories')

	return data
}
