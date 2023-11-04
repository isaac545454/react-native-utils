export type ButtonStyle = {
	button: {
		backgroundColor: string
		borderWidth?: number
		borderColor?: string
	}
	title: {
		color: string
	}
}

export const ButtonPrimary: ButtonStyle = {
	button: {
		backgroundColor: '#800080',
	},
	title: {
		color: '#fff',
	},
}

export const ButtonSecondary: ButtonStyle = {
	button: {
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#800080',
	},
	title: {
		color: '#800080',
	},
}
