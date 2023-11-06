import { TouchableOpacityProps } from 'react-native'
import { ButtonsVariants } from './variants'
import { TextGlobal, textSizes } from '../TextGlobal'

export type ButtonProps = TouchableOpacityProps & {
	isLoading?: boolean
	variants?: keyof typeof ButtonsVariants
	children: React.ReactNode
	TextSize?: keyof typeof textSizes
	TextWeight?: 'bold'
}
