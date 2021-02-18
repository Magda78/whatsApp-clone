import React from 'react';
import './RightSideContentItem.css';

function RightSideContentItem({name, timeStamp, msg}) {

    return (
        <div className='rightSideContentItem'>
            <p>{name.toUpperCase()}</p>
            <div className='rightSideContentItem__msg'>
                <p className='rightSideContentItem__msgText'>{msg}</p>
                <p className='rightSideContentItem__msgTime'>{new Date(timeStamp?.toDate()).toUTCString()}</p>
            </div>
        </div>
    )
}

export default RightSideContentItem
