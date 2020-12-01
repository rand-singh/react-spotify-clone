import React from 'react';
import './Login.scss';
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className="login">
            <img src="./spotify-192.png" alt="Spotify logo" />
            <h1>Spotify</h1>
            <a href={loginUrl} title="Login with Shopify">LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
