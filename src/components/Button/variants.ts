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
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: '#800080',
	},
	title: {
		color: '#800080',
	},
}

export const ButtonTertiary: ButtonStyle = {
	button: {
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: '#333',
	},
	title: {
		color: '#333',
	},
}

export const ButtonSuccess: ButtonStyle = {
	button: {
		backgroundColor: 'green',
	},
	title: {
		color: '#fff',
	},
}

export const ButtonWarning: ButtonStyle = {
	button: {
		backgroundColor: 'orange',
	},
	title: {
		color: '#fff',
	},
}

export const ButtonsVariants = {
	primary: ButtonPrimary,
	secondary: ButtonSecondary,
	tertiary: ButtonTertiary,
	success: ButtonSuccess,
	warning: ButtonWarning,
}
