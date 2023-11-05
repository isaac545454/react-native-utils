import React from 'react'
import { TextInput } from 'react-native'
import { FieldValues, Controller } from 'react-hook-form'
import { InputProps } from './type'

export const Input = <TFieldValues extends FieldValues>({ name, control, ...res }: InputProps<TFieldValues>) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value } }) => <TextInput onChangeText={onChange} value={value} {...res} />}
		/>
	)
}
