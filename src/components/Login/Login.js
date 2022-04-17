import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import GoogleLogo from '../../assets/img/google.svg'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../Firebase/Firesbase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const provider = new GoogleAuthProvider();
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const googleAuth = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                navigate = ('/')
            }).catch((error) => {

                const errorMessage = error.message;

            });
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);
    const handdleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if (validEmail) {
            setEmail(e.target.value);
        } else {
            setError('Invalid email !!')
        }
    }
    const handdlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        console.log(validPassword);
        // setPassword(e.target.value);
    }
    const handdleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='auth-form-container '>
            <div className='auth-form'>
                <h1>Login</h1>
                <form onSubmit={handdleLogin}>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper'>
                            <input type='text' name='email' onChange={handdleEmailChange} />

                        </div>
                        {error && <p>{error}</p>}
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper'>
                            <input type='password' name='password' onChange={handdlePasswordChange} />
                        </div>
                    </div>
                    <button type='submit' className='auth-form-submit'>
                        Login
                    </button>
                </form>
                <p className='redirect'>
                    New to Tech Geeks?{" "}
                    <span onClick={() => navigate("/signup")}>Create New Account</span>
                </p>
                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p>or</p>
                    <div className='line-right' />
                </div>
                <div className='input-wrapper'>
                    <button className='google-auth' onClick={googleAuth}>
                        <img src={GoogleLogo} alt='' />
                        <p> Continue with Google </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;