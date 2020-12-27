import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

import Button from '@material-ui/core/Button';


function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        // Sign in
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Facebook_circle_pictogram.svg/1200px-Facebook_circle_pictogram.svg.png" alt=""/>
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
            </div>
            <Button type="submit" onClick={signIn}>Sign in</Button>
        </div>
    )
}

export default Login;
