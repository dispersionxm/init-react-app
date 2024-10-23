import { Information, Field } from './components'

export const GameLayout = ({ gameFeatures, setGameFeatures }) => {
	console.log(gameFeatures)
	return (
		<div className="mx-auto flex flex-col min-w-96 container justify-evenly items-center">
			<Information
				gameFeatures={gameFeatures}
				setGameFeatures={setGameFeatures}
			/>
			<Field gameFeatures={gameFeatures} setGameFeatures={setGameFeatures} />
		</div>
	)
}
