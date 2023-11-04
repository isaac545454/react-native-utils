import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { style } from './style'
import { LoadingButton } from '../Loading'
import { ButtonPrimary, ButtonSecondary } from './variants'

type ButtonProps = React.ComponentProps<typeof TouchableOpacity> & {
	title: string
	isLoading?: boolean
	Icon?: () => React.ReactNode
	variants?: 'primary' | 'secondary'
}

const ButtonsVariants = {
	primary: ButtonPrimary,
	secondary: ButtonSecondary,
}

export const Button = ({ title, isLoading = false, Icon, disabled, variants = 'primary', ...res }: ButtonProps) => {
	return (
		<TouchableOpacity
			style={[style.container, ButtonsVariants[variants].button, disabled && disabled && style.disabled]}
			disabled={disabled || isLoading}
			{...res}
		>
			{isLoading && <LoadingButton />}
			{!isLoading && (
				<View style={style.content}>
					<Text style={[style.title, ButtonsVariants[variants].title]}>{title}</Text>
					{Icon && <Icon />}
				</View>
			)}
		</TouchableOpacity>
	)
}
