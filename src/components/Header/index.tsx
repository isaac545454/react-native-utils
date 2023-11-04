import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'

export const Header = (): JSX.Element => {
	return (
		<View style={styles.Container}>
			<Text style={styles.title}></Text>
		</View>
	)
}
