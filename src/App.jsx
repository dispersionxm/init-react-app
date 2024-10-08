import classes from './App.module.scss'
import { useState } from 'react'

export const App = () => {
	const [operand1, setOperand1] = useState('')
	const [operand2, setOperand2] = useState('')
	const [operator, setOperator] = useState('')
	const [result, setResult] = useState(null)

	const handleOperand = num => {
		if (isNum(num)) {
			if (operator === '') {
				setOperand1(prevState => prevState + num)
			} else {
				setOperand2(prevState => prevState + num)
			}
		} else if (num === 'c' || num === '=') {
			handleResult(num)
		} else {
			setOperator(num)
		}

		if (result && operator) {
			setOperand1(result)
			setResult('')
		}
	}

	const handleResult = num => {
		if (num === '=') {
			setResult(eval(`${Number(operand1)}${operator}${Number(operand2)}`))
		} else {
			setResult('')
		}
		setOperand1('')
		setOperand2('')
		setOperator('')
	}

	const nums = [
		'1',
		'2',
		'3',
		'c',
		'4',
		'5',
		'6',
		'+',
		'7',
		'8',
		'9',
		'-',
		'0',
		'='
	]

	const isNum = item => {
		return Boolean(Number(item)) || item === '0'
	}

	return (
		<div className={classes.container}>
			<div className={classes.display}>
				<div>
					{operand1} {operator} {operand2}
				</div>
				<div style={{ color: 'green' }}>{result}</div>
			</div>
			<div className={classes.buttons}>
				{nums.map(num => (
					<button
						key={num}
						className={
							isNum(num)
								? classes.button
								: `${classes.button} ${classes.operator}`
						}
						onClick={() => handleOperand(num)}
					>
						{num}
					</button>
				))}
			</div>
		</div>
	)
}
