import React, { useEffect, useState } from 'react';
import './LeftSideBodyItem.css';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom'
import db from '../../../../firebase';

function LeftSideBodyItem({ name, id }) {
    const[ msgs, setMsgs] = useState('')
    useEffect(() => {
        if(id) {
            db.collection('rooms')
            .doc(id)
            .collection('msg')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => (
setMsgs(snapshot.docs.map((doc) => doc.data()))
            ))
        }
        
    }, [id])


    return (
        <Link to={`/rooms/${id}`}>
            <div className='leftSideBodyItem'>
            <div className='leftSideBodyItem__infoContainer'>
                
            <div className='leftSideBodyItem__avatar'>
                <Avatar />
                </div>
            <div className='leftSideBodyItem__info'>
                <h3>{name}</h3>
                <h4>{msgs[0]?.msg}</h4>
            </div>
            </div>
        </div>
        </Link>
        
    )
}

export default LeftSideBodyItem
