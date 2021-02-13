import React from 'react';
import './LeftSideBodyItem.css';
import { Avatar } from '@material-ui/core';

function LeftSideBodyItem() {
    return (
        <div className='leftSideBodyItem'>
            <div className='leftSideBodyItem__infoContainer'>
                
            <div className='leftSideBodyItem__avatar'>
                <Avatar />
                </div>
            <div className='leftSideBodyItem__info'>
                <h3>Name</h3>
                <h4>Message</h4>
            </div>
            </div>
            <div className='leftSideBodyItem__date'>
                <p>Date</p>
            </div>
        </div>
    )
}

export default LeftSideBodyItem
