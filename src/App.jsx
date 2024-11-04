import { useRef, useState } from 'react'
import './App.scss'

const initialState = {
	email: '',
	password: '',
	confirmedPassword: '',
}

const useStore = () => {
	const [state, setState] = useState(initialState)

	return {
		getState() {
			return state
		},
		updateState(element, newValue) {
			setState({
				...state,
				[element]: newValue,
			})
		},
		resetState() {
			setState(initialState)
		},
	}
}

export const App = () => {
	const { getState, updateState, resetState } = useStore()
	const [registerError, setRegisterError] = useState({
		emailError: '',
		passwordError: '',
		confirmedPasswordError: '',
	})

	const submitButtonRef = useRef(null)

	const { email, password, confirmedPassword } = getState()
	const { emailError, passwordError, confirmedPasswordError } = registerError

	const handleSubmit = event => {
		event.preventDefault()

		const formData = getState()

		//sendDataToTheBackend(formData)
		console.log(formData)

		resetState()
	}

	const onEmailChange = ({ target }) => {
		updateState(target.name, target.value)

		let newError = null

		if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
			newError = 'email is incorrect'
		}

		setRegisterError({
			...registerError,
			emailError: newError,
		})
	}

	const onPasswordChange = ({ target }) => {
		updateState(target.name, target.value)

		let newError = null

		if (password.length < 8) {
			newError = 'Password must be at least 8 symbols!'
		} else if (password.length > 20) {
			newError = 'Password must be less than 20symbols!'
		}

		setRegisterError({
			...registerError,
			passwordError: newError,
		})
	}

	const onConfirmedPasswordChange = ({ target }) => {
		updateState(target.name, target.value)

		if (
			emailError !== '' &&
			password !== '' &&
			confirmedPassword !== '' &&
			password === confirmedPassword
		) {
			submitButtonRef.current.focus()
		}
	}

	const onConfirmedPasswordBlur = () => {
		let newError = null

		if (password !== confirmedPassword) {
			newError = 'Пароли должны совпадать'
		}

		setRegisterError({
			...registerError,
			confirmedPasswordError: newError,
		})
	}

	if (
		emailError !== '' &&
		passwordError !== '' &&
		confirmedPasswordError !== '' &&
		!emailError &&
		!passwordError &&
		!confirmedPasswordError
	) {
		submitButtonRef.current.focus()
	}

	return (
		<>
			<h1>Форма регистрации</h1>

			<form className="register" onSubmit={handleSubmit}>
				{emailError && <p className="label-error">{emailError}</p>}
				<input
					name={'email'}
					type={'email'}
					placeholder="Enter your email..."
					value={email}
					onChange={onEmailChange}
				/>
				{passwordError && <p className="label-error">{passwordError}</p>}
				<input
					name={'password'}
					type={'password'}
					placeholder="Enter password..."
					value={password}
					onChange={onPasswordChange}
				/>
				{confirmedPasswordError && (
					<p className="label-error">{confirmedPasswordError}</p>
				)}
				<input
					name={'confirmedPassword'}
					type={'password'}
					placeholder="Enter password again..."
					value={confirmedPassword}
					onChange={onConfirmedPasswordChange}
					onBlur={onConfirmedPasswordBlur}
				/>
				<button
					ref={submitButtonRef}
					type="submit"
					disabled={
						!(
							emailError !== '' &&
							passwordError !== '' &&
							confirmedPasswordError !== '' &&
							!emailError &&
							!passwordError &&
							!confirmedPasswordError
						)
					}
				>
					Зарегистрироваться
				</button>
			</form>
		</>
	)
}
