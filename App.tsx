import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'
import { Button } from './src/components/Button'
import { AntDesign } from '@expo/vector-icons'
import { data } from './mock'

export default function App() {
	return (
		<SafeAreaView style={style.container}>
			<StatusBar />

			<Button TextSize="xl" TextWeight="bold">
				aaaaaa
				<AntDesign name="adduser" size={30} />
			</Button>
			<Button variants="warning" isLoading={true}>
				aaaaaa
			</Button>
			<Button>aaaa</Button>
			<Button variants="tertiary">aaaa</Button>
			<Button variants="success">aaaaa</Button>

			<FlatList data={data} keyExtractor={item => item.id} renderItem={({ item }) => <Text>{item.message}</Text>} />
		</SafeAreaView>
	)
}

const style = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
	},
})
