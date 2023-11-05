import { TouchableOpacityProps } from 'react-native'
import { ButtonsVariants } from './variants'
import { TextGlobal } from '../TextGlobal'

export type ButtonProps = TouchableOpacityProps & {
	title: React.ComponentProps<typeof TextGlobal>
	isLoading?: boolean
	Icon?: () => React.ReactNode
	variants?: keyof typeof ButtonsVariants
}
