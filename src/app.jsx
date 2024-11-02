import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import classes from './app.module.css'

const fieldsScheme = yup.object().shape({
	login: yup
		.string()
		.matches(/^[\w_]*$/, 'Must be used letters, numbers and underscore.')
		.max(20, 'Must be less than 20 symbols.')
		.min(3, 'Must be more than 3 symbols.'),
})

export const App = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
		},
		resolver: yupResolver(fieldsScheme),
	})

	const loginError = errors?.login?.message
	const onSubmit = formData => {
		console.log(formData)
	}

	return (
		<div className={classes.container}>
			<form onSubmit={handleSubmit(onSubmit)}>
				{loginError && <div className={classes.errorLabel}>{loginError}</div>}
				<input name="login" type="text" {...register('login')} />
				<button type="submit" disabled={!!loginError}>
					Send
				</button>
			</form>
		</div>
	)
}
