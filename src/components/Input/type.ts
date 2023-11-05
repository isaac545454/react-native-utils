import React from 'react'
import { TextInput } from 'react-native'
import { UseControllerProps, FieldValues } from 'react-hook-form'

export type InputProps<TFieldValues extends FieldValues> = React.ComponentProps<typeof TextInput> &
	UseControllerProps<TFieldValues>
