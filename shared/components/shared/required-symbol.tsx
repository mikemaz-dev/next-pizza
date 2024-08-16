import { Asterisk } from 'lucide-react'
import React from 'react'

interface Props {
	className?: string
}

export const RequiredSymbol: React.FC<Props> = ({ className }) => {
	return <Asterisk className='text-red-500' />
}
