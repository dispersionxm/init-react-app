import { useState } from 'react'
import ReactLogo from './assets/react.svg?react'
import './App.css'

const thisYear = new Date().getFullYear()

export const App = () => {
	const [count, setCount] = useState(0)

	return (
		<>
			<h1>Hello World!</h1>
			<ReactLogo />
			<h2>{thisYear}</h2>

			<hr />
		</>
	)
}
