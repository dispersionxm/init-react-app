import classes from './App.module.scss'
import { useState } from 'react'

export const App = () => {
	const [calcState, setCalcState] = useState({
		operand1: '',
		operand2: '',
		operator: '',
		result: null
	})

	const handleOperand = num => {
		if (isNum(num)) {
			if (calcState.operator === '') {
				setCalcState(prevState => ({
					...prevState,
					operand1: calcState.operand1 + num,
					result: ''
				}))
			} else {
				setCalcState(prevState => ({
					...prevState,
					operand2: calcState.operand2 + num
				}))
			}
		} else if (num === 'c' || num === '=') {
			handleResult(num)
		} else {
			setCalcState(prevState => ({
				...prevState,
				operator: num
			}))
		}

		if (calcState.result && calcState.operator) {
			setCalcState(prevState => ({
				...prevState,
				operand1: calcState.result,
				result: ''
			}))
		}
	}

	const calculation = operator => {
		if (operator === '+') {
			return Number(calcState.operand1) + Number(calcState.operand2)
		} else if (operator === '-') {
			return Number(calcState.operand1) - Number(calcState.operand2)
		} else {
			return Number(calcState.result)
		}
	}

	const handleResult = num => {
		if (num === '=') {
			setCalcState(prevState => ({
				...prevState,
				result: `${calculation(calcState.operator)}`
			}))
		} else {
			setCalcState(prevState => ({
				...prevState,
				result: ''
			}))
		}
		setCalcState(prevState => ({
			...prevState,
			operand1: '',
			operator: '',
			operand2: ''
		}))
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
					{calcState.operand1} {calcState.operator} {calcState.operand2}
				</div>
				<div style={{ color: 'green' }}>{calcState.result}</div>
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
