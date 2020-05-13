import React, { useState, useCallback } from 'react';

import Form from './Form';
import Card from './Card';
import './styles.css';

function Main() {
	const [cards, setCards] = useState([]);

	const handleSubmit = useCallback((data) => {
		const { title, text } = data;

		setCards((prev) => [
			...prev,
			{
				title,
				text,
			},
		]);
	}, []);

	return (
		<main id="main">
			<Form onSubmit={handleSubmit} />

			<ul className="cards">
				{cards.length > 0 &&
					cards.map((card, index) => <Card key={index} {...card} />)}
			</ul>
		</main>
	);
}

export default Main;
