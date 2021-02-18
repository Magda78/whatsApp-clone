import React, { useState, useEffect } from 'react';
import './RightSideContent.css';
import RightSideContentItem from './RightSideContentItem/RightSideContentItem';
import db from '../../../firebase';
import { useParams } from 'react-router-dom';

function RightSideContent() {
	const { roomId } = useParams();
	const [ messages, setMessages ] = useState([]);
    const  [ roomName, setRoomName ] = useState();

	useEffect(
		() => {
            if (roomId) {
                db.collection("rooms")
                  .doc(roomId)
                  .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
				db
					.collection('rooms')
					.doc(roomId)
					.collection('msg')
					.orderBy('timeStamp', 'asc')
					.onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())));
            }
		},
		[ roomId ]
	);

	return (
		<div className="rightSideContent">
			{messages.map((item) => {
				return <RightSideContentItem name={item.name} timeStamp={item.timeStamp} msg={item.msg} />;
			})}
		</div>
	);
}

export default RightSideContent;
