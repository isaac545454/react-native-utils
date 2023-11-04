import React from 'react'
import { TextInput } from 'react-native'
import { UseControllerProps, FieldValues, Controller } from 'react-hook-form'

type InputProps<TFieldValues extends FieldValues> = React.ComponentProps<typeof TextInput> &
	UseControllerProps<TFieldValues>

export const Input = <TFieldValues extends FieldValues>({ name, control, ...res }: InputProps<TFieldValues>) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value } }) => <TextInput onChangeText={onChange} value={value} {...res} />}
		/>
	)
}
