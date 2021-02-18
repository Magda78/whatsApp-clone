import React from 'react';
import { Avatar } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './LeftSideTop.css';
import { useSelector } from 'react-redux'; 
import { selectUser } from '../../../features/userSlice'

function LeftSideTop() {
    const user = useSelector(selectUser)
    return (
        <div className='leftSideTop'>
            <Avatar src={user?.photoURL}/> 
            <DonutLargeIcon />
            <InsertCommentIcon />
            <ExpandMoreIcon />
        </div>
    )
}

export default LeftSideTop
