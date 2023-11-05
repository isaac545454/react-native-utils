import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import { LoadingButton } from '../Loading'
import { ButtonsVariants } from './variants'
import { TextGlobal } from '../TextGlobal'
import { ButtonProps } from './type'

export const Button = (props: ButtonProps) => {
	const { title, isLoading = false, Icon, disabled, variants = 'primary', style, ...res } = props
	return (
		<TouchableOpacity
			style={[styles.container, ButtonsVariants[variants].button, disabled && disabled && styles.disabled, style]}
			disabled={disabled || isLoading}
			{...res}
		>
			{isLoading && <LoadingButton />}
			{!isLoading && (
				<View style={styles.content}>
					<TextGlobal style={[ButtonsVariants[variants].title, title.style]} {...title} />
					{Icon && <Icon />}
				</View>
			)}
		</TouchableOpacity>
	)
}
