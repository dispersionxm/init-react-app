import { useState } from 'react'
import style from './App.module.scss'

const setTime = () => {
	const date = new Date()
	const currentTime = `${date.toLocaleDateString('uz-Uz')} ${date.toLocaleTimeString('uz-UZ')}`
	return `${currentTime}`
}

console.log(setTime())

export const App = () => {
	const [isValidValue, setIsValidValue] = useState(false)
	const onInputButtonClick = () => {
		const promptValue = prompt()
		if (promptValue !== null && promptValue.trim().length > 3) {
			setValue(promptValue)
			setError('')
			setIsValidValue(true)
		} else {
			setError(promptValue)
			setIsValidValue(false)
		}
	}
	const onAddButtonClick = () => {
		setList(prevList => [
			{
				id: Date.now(),
				value,
				time: setTime()
			},
			...prevList
		])
		setIsListEmpty(false)
		setValue('')
		setIsValidValue(false)
	}

	const [value, setValue] = useState('')
	const [error, setError] = useState('')
	const [list, setList] = useState([])
	const [isListEmpty, setIsListEmpty] = useState(true)
	return (
		<div className={style.app}>
			<h1 className={style.pageHeading}>Ввод значения</h1>
			<p className={style.noMarginText}>
				Текущее значение <code>value</code>: &#34;
				<output className={style.currentValue}>{value}</output>&#34;
			</p>
			<div className={error !== '' ? style.error : style.inactiveError}>
				Введенное значение должно содержать минимум 3 символа
			</div>
			<div className={style.buttonsContainer}>
				<button className={style.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={style.button}
					disabled={!isValidValue}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={style.listContainer}>
				<h2 className={style.listHeading}>Список:</h2>
				<div
					className={`${style.noMarginText} ${isListEmpty ? '' : style.disabledP}`}
				>
					Нет добавленных элементов
				</div>
				<ul className={style.list}>
					{list.map(item => (
						<li key={item.id}>
							<strong>{item.value}</strong>{' '}
							<span className={style.date}>{item.time}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
