import React from 'react';
import './RightSideTop.css';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function RightSideTop() {
	return (
		<div className="rightSideTop">
			<div className="rightSideTop__info">
				<Avatar />
				<h3>Name</h3>
			</div>
			<div className="rightSideTop__icons">
				<SearchIcon />
				<ExpandMoreIcon />
			</div>
		</div>
	);
}

export default RightSideTop;
