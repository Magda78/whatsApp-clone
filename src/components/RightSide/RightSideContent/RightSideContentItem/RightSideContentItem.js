import React from 'react';
import './RightSideContentItem.css';

function RightSideContentItem() {
    return (
        <div className='rightSideContentItem'>
            <p>Name</p>
            <div className='rightSideContentItem__msg'>
                <p className='rightSideContentItem__msgText'>msg.........</p>
                <p className='rightSideContentItem__msgTime'>9:20pm</p>
            </div>
        </div>
    )
}

export default RightSideContentItem
