import React,{ useState } from 'react';
import './RightSideBottom.css';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicNoneIcon from '@material-ui/icons/MicNone';
import { useParams } from 'react-router-dom';
import db from '../../../firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice'

function RightSideBottom() {
    const[addMsg, setAddMsg] = useState('');
    const { roomId }  = useParams();
    const user = useSelector(selectUser);

    const addMessageHandler = (e) => {
        setAddMsg(e.target.value);
        e.preventDefault();
    }

    const submitMsgHandler = (e) => {
        db.collection("rooms").doc(roomId).collection("msg").add({
            msg: addMsg,
            name: user.name,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });
        console.log(addMsg);
        setAddMsg("");
        e.preventDefault();
    }
	return (
		<div className="rightSideBottom">
			<TagFacesIcon />
			<AttachFileIcon />
			<form>
				<input type="text" placeholder="Type a message" onChange={addMessageHandler} value={addMsg}/>
			<button onClick={submitMsgHandler} type='submit'>Send</button>
            </form>
			<MicNoneIcon />
		</div>
	);
}

export default RightSideBottom;
