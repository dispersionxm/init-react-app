import styles from './app.module.css'
import data from './data.json'
import { useState } from 'react'

export const App = () => {
	const [steps, setSteps] = useState(data)
	const [activeIndex, setActiveIndex] = useState(0)

	const goBack = () => {
		setActiveIndex(activeIndex - 1)
	}
	const goForward = () => {
		setActiveIndex(activeIndex + 1)
	}
	const resetSteps = () => {
		setActiveIndex(0)
	}
	const onStepButtonClick = i => {
		setActiveIndex(i)
	}

	const isFirstStep = activeIndex === 0
	const isLastStep = activeIndex === steps.length - 1

	// document.location.hash = activeIndex

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>{steps[activeIndex].title}</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map(({ id }, index) => (
							<li
								key={id}
								className={`${styles['steps-item']} ${index === activeIndex ? styles.active : ''} ${index < activeIndex ? styles.done : ''}`}
							>
								<button
									type="button"
									className={styles['steps-item-button']}
									onClick={() => onStepButtonClick(index)}
								>
									{index + 1}
								</button>
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={goBack}
							disabled={isFirstStep}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={isLastStep ? resetSteps : goForward}
						>
							{isLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
