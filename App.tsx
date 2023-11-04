import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Header } from './src/components/Header'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './src/schemas/test'
import { Tschema } from './src/types/test'
import { Input } from './src/components/Input'
import { Button } from './src/components/Button'
import { AntDesign } from '@expo/vector-icons'

export default function App() {
	const { control } = useForm<Tschema>({ resolver: zodResolver(schema) })

	// const onSubmit = (data: Tschema) => alert('aaa')

	return (
		<SafeAreaView style={style.container}>
			<StatusBar />
			<Header />
			<Input control={control} name="name" />
			<Button title="teste" disabled={true} Icon={() => <AntDesign name="adduser" size={30} />} />
			<Button title="teste" disabled={true} variants="secondary" />
		</SafeAreaView>
	)
}

const style = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
	},
})
