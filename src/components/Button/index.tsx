import React from 'react'
import { Text, TouchableOpacity, View, TouchableOpacityProps } from 'react-native'
import { styles } from './style'
import { LoadingButton } from '../Loading'
import { ButtonsVariants } from './variants'
import { TextGlobal } from '../TextGlobal'

type ButtonProps = TouchableOpacityProps & {
	title: React.ComponentProps<typeof TextGlobal>
	isLoading?: boolean
	Icon?: () => React.ReactNode
	variants?: keyof typeof ButtonsVariants
}

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
