import React,{ useState } from 'react';
import './RightSideBottom.css';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicNoneIcon from '@material-ui/icons/MicNone';

function RightSideBottom() {
    const[addMsg, setAddMsg] = useState('')
    const addMessageHandler = (e) => {
        setAddMsg(e.target.value);
        e.preventDefault();
    }

    const submitMsgHandler = () => {
        console.log(addMsg);
        setAddMsg('')
    }
	return (
		<div className="rightSideBottom">
			<TagFacesIcon />
			<AttachFileIcon />
			<form>
				<input type="text" placeholder="Type a message" onChange={addMessageHandler}/>
			<button onClick={submitMsgHandler}>Send</button>
            </form>
			<MicNoneIcon />
		</div>
	);
}

export default RightSideBottom;
