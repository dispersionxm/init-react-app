import { GameLayout } from './gameLayout.jsx'
import { useState } from 'react'

export const Game = () => {
	const [gameFeatures, setGameFeatures] = useState({
		currentPlayer: 'x',
		isGameEnded: false,
		isDraw: false,
		field: ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'],
	})
	return (
		<GameLayout gameFeatures={gameFeatures} setGameFeatures={setGameFeatures} />
	)
}
