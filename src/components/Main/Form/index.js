import React, { useCallback, useState } from 'react';

import './styles.css';

function Form({ onSubmit }) {
	const [title, setTitle] = useState();
	const [text, setText] = useState();
	const handleSubmit = useCallback(
		(event) => {
			event.preventDefault();

			const data = {
				title,
				text,
			};

			onSubmit(data);
		},
		[onSubmit, text, title]
	);

	return (
		<form className="form" onSubmit={handleSubmit}>
			<input
				name="title"
				type="text"
				placeholder="Enter the title"
				required
				value={title || ''}
				onChange={(event) => setTitle(event.target.value)}
			/>
			<textarea
				name="text"
				cols="30"
				rows="10"
				placeholder="Enter the text"
				required
				value={text || ''}
				onChange={(event) => setText(event.target.value)}
			/>

			<button type="submit">Add new card</button>
		</form>
	);
}

export default Form;
