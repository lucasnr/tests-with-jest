import React from 'react';

import './styles.css';

function Card({ title, text }) {
	return (
		<li className="card">
			<h2 className="card__title">{title}</h2>
			<p className="card__text">{text}</p>
		</li>
	);
}

export default Card;
