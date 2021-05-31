import React, { useState } from 'react';
import './Login.css';
import logo from "../src/Images/logo.png";
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        // firebase signin stuff happens here
        auth
            .signInWithEmailAndPassword(email, password)
            // if succesfully signed in w/ email and password, send user to homepage
            .then((auth) => {
                if (auth) {
                    history.push('/');
                }
            })
            // if failed for some reason
            .catch(error => alert(error.message));
    }

    const register = (e) => {
        e.preventDefault();
        // firebase register stuff happens here
        auth
            .createUserWithEmailAndPassword(email, password)
            // if succesfully created a new user w/ email and password, send user to homepage
            .then((auth) => {
                if (auth) {
                    history.push('/');
                }
            })
            // if failed for some reason
            .catch(error => alert(error.message));
    }
    
    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src={logo} alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className="login__signinButton">Sign in</button>
                </form>

                <button onClick={register} className="login__registerButton">Create an account</button>
            </div>
        </div>
    )
}

export default Login
