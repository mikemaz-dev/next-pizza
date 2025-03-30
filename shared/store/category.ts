import { create } from 'zustand'

interface State {
	activeId: number
	setActiveId: (activeId: number) => void
}

export const useCategorySore = create<State>()(set => ({
	activeId: 1,
	setActiveId: (activeId: number) => set({ activeId }),
}))
