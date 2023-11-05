import React from 'react'
import { Text, TextProps } from 'react-native'

const textSizes = {
	xs: 12,
	sm: 14,
	md: 16,
	lg: 18,
	xl: 22,
}

type Props = TextProps & { size?: keyof typeof textSizes; weight?: 'bold' }

export const TextGlobal = ({ size = 'xs', style, weight, ...res }: Props) => {
	return <Text {...res} style={[{ fontSize: textSizes[size], fontWeight: weight && 'bold' }, style]} />
}
