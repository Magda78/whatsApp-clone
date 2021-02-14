import React from 'react';
import './RightSideBottom.css';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicNoneIcon from '@material-ui/icons/MicNone';

function RightSideBottom() {
    return (
        <div className='rightSideBottom'>
            <TagFacesIcon  />
            <AttachFileIcon />
            <input type='text' placeholder='Type a message' />
            <MicNoneIcon />

        </div>
    )
}

export default RightSideBottom
