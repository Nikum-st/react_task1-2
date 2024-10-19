import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	const [steps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const clickForward = () => {
		setActiveIndex(activeIndex + 1);
	};

	const clickBack = () => {
		setActiveIndex(activeIndex - 1);
	};

	const startOver = () => {
		setActiveIndex(0);
	};

	let isFirstStep = () => activeIndex === 0;
	let isLastStep = () => activeIndex === steps.length - 1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map(({ id, title }, index) => (
							<li
								className={`${styles['steps-item']} ${activeIndex >= index ? styles.done : ''} ${
									activeIndex === index ? styles.active : ''
								}`}
								key={id}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => setActiveIndex(index)}
								>
									{index + 1}
								</button>
								{title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							disabled={isFirstStep()}
							onClick={clickBack}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={isLastStep() ? startOver : clickForward}
						>
							{isLastStep() ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
