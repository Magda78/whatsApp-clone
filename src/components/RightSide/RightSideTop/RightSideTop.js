import React, { useState, useEffect } from 'react';
import './RightSideTop.css';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useParams } from 'react-router-dom';
import db from '../../../firebase';

function RightSideTop() {
	const [ roomName, setRoomName ] = useState('');
	const { roomId } = useParams();

	useEffect(
		() => {
			db.collection('rooms').doc(roomId).onSnapshot((snapshot) => setRoomName(snapshot.data().name));
		},
		[ roomId ]
	);

	return (
		<div className="rightSideTop">
			<div className="rightSideTop__info">
				<Avatar />
				<h3>{roomName}</h3>
			</div>
			<div className="rightSideTop__icons">
				<SearchIcon />
				<ExpandMoreIcon />
			</div>
		</div>
	);
}

export default RightSideTop;
