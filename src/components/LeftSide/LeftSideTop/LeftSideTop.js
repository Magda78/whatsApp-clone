import React from 'react';
import { Avatar } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './LeftSideTop.css';


function LeftSideTop() {
    return (
        <div className='leftSideTop'>
            <Avatar /> 
            <DonutLargeIcon />
            <InsertCommentIcon />
            <ExpandMoreIcon />
        </div>
    )
}

export default LeftSideTop
