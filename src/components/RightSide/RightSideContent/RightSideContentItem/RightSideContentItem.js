import React from 'react';
import './RightSideContentItem.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../features/userSlice';


function RightSideContentItem({name, timeStamp, msg}) {
    const user = useSelector(selectUser);
    return (
        <div className='rightSideContentItem'>
            <p>{name.toUpperCase()}</p>
            <div className={`rightSideContentItem__msg ${name === user.displayName & "rightSideContentItem__msgUser"}`}>
                <p className='rightSideContentItem__msgText'>{msg}</p>
                <p className='rightSideContentItem__msgTime'>{new Date(timeStamp?.toDate()).toUTCString()}</p>
            </div>
        </div>
    )
}

export default RightSideContentItem
