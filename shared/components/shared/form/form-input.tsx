'use client'
import { InputHTMLAttributes } from 'react'
import { RequiredSymbol } from '../required-symbol'

import { Input } from '../../ui'
import { ErrorText } from '../error-text'
import { useFormContext } from 'react-hook-form'
import { InputMask } from 'primereact/inputmask'
import { ClearButton } from '../clear-button'
interface Props extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	label?: string
	required?: boolean
	type?: string
	className?: string
}

export const FormInput: React.FC<Props> = ({
	name,
	label,
	required,
	type,
	className,
	...props
}) => {
	const {
		register,
		formState: { errors },
		watch,
		setValue,
	} = useFormContext()

	const value = watch(name)
	const errorText = errors[name]?.message as string

	const onClickClear = () => {
		setValue(name, '', { shouldValidate: true })
	}

	const chooseInput = () => {
		if (type === 'phone') {
			return (
				<>
					<InputMask
						id='phone'
						mask='+48 999 999 999'
						placeholder='999 999 999'
						className='flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-md'
						{...register(name)}
					/>
					{value && <ClearButton onClick={onClickClear} />}
				</>
			)
		} else {
			return (
				<>
					<Input
						className='h-12 text-md'
						type={type}
						{...register(name)}
						{...props}
					/>
					{value && <ClearButton onClick={onClickClear} />}
				</>
			)
		}
	}

	return (
		<div className={className}>
			{label && (
				<p className='font-medium mb-2'>
					{label} {required && <RequiredSymbol />}
				</p>
			)}
			<div className='relative'>{chooseInput()}</div>
			{errorText && <ErrorText text={errorText} className='mb-2' />}
		</div>
	)
}
