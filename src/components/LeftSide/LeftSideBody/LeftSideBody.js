import React, { useState, useEffect } from 'react';
import './LeftSideBody.css';
import LeftSideBodyItem from './LeftSideBodyItem/LeftSideBodyItem';
import db from '../../../firebase';

function LeftSideBody() {
	const [ rooms, setRooms ] = useState([]);

	useEffect(() => {
		const toCleanUp = db.collection('rooms').onSnapshot((snapshot) =>
			setRooms(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data()
				}))
			)
		);
		return () => {
			toCleanUp();
		};
	}, []);

	return (
		<div className="leftSideBody">
			{rooms.map((item) => <LeftSideBodyItem key={item.id} id={item.id} name={item.data.name} />)}
		</div>
	);
}

export default LeftSideBody;
