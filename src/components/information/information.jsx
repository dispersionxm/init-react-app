import { InformationLayout } from './informationLayout.jsx'

export const Information = ({ gameFeatures, setGameFeatures }) => {
	return (
		<InformationLayout
			gameFeatures={gameFeatures}
			setGameFeatures={setGameFeatures}
		/>
	)
}
