import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import { LoadingButton } from '../Loading'
import { ButtonsVariants } from './variants'
import { TextGlobal } from '../TextGlobal'
import { ButtonProps } from './type'

export const Button = (props: ButtonProps) => {
	const { isLoading = false, disabled, variants = 'primary', children, TextSize, TextWeight, style, ...res } = props

	return (
		<TouchableOpacity
			style={[styles.container, ButtonsVariants[variants].button, disabled && disabled && styles.disabled, style]}
			disabled={disabled || isLoading}
			{...res}
		>
			{isLoading && <LoadingButton />}
			{!isLoading && (
				<View style={styles.content}>
					<TextGlobal style={[ButtonsVariants[variants].title]} weight={TextWeight} size={TextSize}>
						{children}
					</TextGlobal>
				</View>
			)}
		</TouchableOpacity>
	)
}
