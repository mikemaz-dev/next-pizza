'use client'
import { FC, InputHTMLAttributes, useRef } from 'react'
import { RequiredSymbol } from '../required-symbol'

import { Input } from '../../ui'
import { ClearButton } from '../clear-button'
import { ErrorText } from '../error-text'
import { useFormContext } from 'react-hook-form'
import { InputMask } from 'primereact/inputmask'
import { type } from 'os'
import { mask } from 'primereact/utils'
import { title } from 'process'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	label?: string
	required?: boolean
	type?: string
	className: string
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

	const ref = useRef(null)
	const inputRef = useRef(null)

	return (
		<div className={className}>
			{label && (
				<p className='font-medium mb-2'>
					{label} {required && <RequiredSymbol />}
				</p>
			)}
			<div className='relative'>
				{type === 'phone' && (
					<InputMask
						id='phone'
						mask='+48 999 999 999'
						placeholder='999 999 999'
						className='flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-md'
						{...register(name)}
						{...props}
						/>
				)}
				{type === 'phone' ? null : (
					<Input className='h-12 text-md' {...register(name)} {...props} />
				)}
			</div>
			{errorText && <ErrorText text={errorText} className='mb-2' />}
		</div>
	)
}
