import React from 'react';
import './LeftSideBodyItem.css';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom'

function LeftSideBodyItem({ name, id }) {
    
    return (
        <Link to={`/rooms/${id}`}>
            <div className='leftSideBodyItem'>
            <div className='leftSideBodyItem__infoContainer'>
                
            <div className='leftSideBodyItem__avatar'>
                <Avatar />
                </div>
            <div className='leftSideBodyItem__info'>
                <h3>{name}</h3>
                <h4>Message</h4>
            </div>
            </div>
            <div className='leftSideBodyItem__date'>
                <p>Date</p>
            </div>
        </div>
        </Link>
        
    )
}

export default LeftSideBodyItem
