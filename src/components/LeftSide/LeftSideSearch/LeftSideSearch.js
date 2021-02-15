import React, { useState } from 'react';
import './LeftSideSearch.css';
import SearchIcon from '@material-ui/icons/Search';
import db from '../../../firebase';

function LeftSideSearch() {
	const [ input, setInput ] = useState('');
	const inputHandler = (e) => {
		setInput(e.target.value);
		e.preventDefault();
	};

	const addContactHandler = (e) => {
		if (input) {
			db.collection('rooms').add({
				name: input
			});
		}
		console.log(input);
        e.preventDefault();
	};
	return (
		<div className="leftSideSearch">
			<div className="leftSideSearch__item">
				<SearchIcon />
				<form>
					<input type="text" placeholder="Search or start new chat" onChange={inputHandler} />
					<button onClick={addContactHandler}>Add</button>
				</form>
			</div>
		</div>
	);
}

export default LeftSideSearch;
