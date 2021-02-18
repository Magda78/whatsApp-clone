import React from 'react';
import './Login.css';
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice'

function Login() {

    const dispatch = useDispatch();

    const signInHandler = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch(login({
                name: result.user.displayName,
                photoURL: result.user.photoURL,
                email: result.user.email
            }))
          console.log(result)
        })
        .catch((error) => alert(error.message));
    }

    return (
        <div className='login'>
            <div className='loginContainer'>
            <img src='https://whatsappbrand.com/wp-content/themes/whatsapp-brc/images/WhatsApp_Logo_6.png' alt=''/>
            <h2>Sign in to What's App</h2>
            <Button onClick={signInHandler}>Sign in with Google</Button>
            </div>
            
        </div>
    )
}

export default Login
