import * as yup from 'yup'

const loginChageScheme = yup
	.string()
	.matches(
		/^[\w_]*$/,
		'Login is incorrect. You can use letters, numbers and underscore',
	)
	.max(20, "Login is incorrect. Shouldn't be bigger than 20 symbols")

const loginBlurScheme = yup
	.string()
	.min(2, "Login is incorrect. Login shouldn't be smallerthan 3 symbols")

const validateAndGetErrorMessage = (scheme, value) => {
	let errorMessage = null

	try {
		scheme.validateSync(value, { abortEarly: false })
	} catch ({ errors }) {
		errorMessage = errors
			.reduce((message, error) => message + error + 'n', '')
			.trim()
		console.log(errors)
	}

	return errorMessage
}

export { loginChageScheme, loginBlurScheme, validateAndGetErrorMessage }
