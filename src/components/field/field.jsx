import { FieldLayout } from './fieldLayout.jsx'

export const Field = ({ gameFeatures, setGameFeatures }) => {
	return (
		<FieldLayout
			gameFeatures={gameFeatures}
			setGameFeatures={setGameFeatures}
		/>
	)
}
