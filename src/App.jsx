import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import './App.scss'

const sendFormData = formData => {
	console.log(formData)
}

export const App = () => {
	const registerFormSchema = yup.object().shape({
		email: yup
			.string()
			.matches(
				/^[A-Z0-9._]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
				'Адрес электронной почты неверный...',
			),
		password: yup
			.string()
			.min(8, 'Неверный пароль. Должно быть не меньше 8 символов')
			.required('Пароль обязателен'),
		confirmedPassword: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
			.required('Подтверждение пароля обязательно'),
	})

	const {
		watch,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			confirmedPassword: '',
		},
		resolver: yupResolver(registerFormSchema),
	})

	const submitButtonRef = useRef(null)

	const password = watch('password')
	const confirmPassword = watch('confirmPassword')

	if (password && confirmPassword && password === confirmPassword) {
		submitButtonRef.current.focus()
	}
	// focus не работает

	const emailError = errors.email?.message
	const passwordError = errors.password?.message
	const confirmedPasswordError = errors.confirmedPassword?.message

	return (
		<>
			<h1>Форма регистрации</h1>

			<form className="register" onSubmit={handleSubmit(sendFormData)}>
				{emailError && <p className={'label-error'}>{emailError}</p>}
				<input
					name={'email'}
					type={'email'}
					placeholder="Enter your email..."
					{...register('email')}
				/>
				{passwordError && <p className={'label-error'}>{passwordError}</p>}
				<input
					name={'password'}
					type={'password'}
					placeholder="Enter password..."
					{...register('password')}
				/>
				{confirmedPasswordError && (
					<p className={'label-error'}>{confirmedPasswordError}</p>
				)}
				<input
					name={'confirmedPassword'}
					type={'password'}
					placeholder="Enter password again..."
					{...register('confirmedPassword')}
				/>
				<button ref={submitButtonRef} type="submit">
					Зарегистрироваться
				</button>
			</form>
		</>
	)
}
