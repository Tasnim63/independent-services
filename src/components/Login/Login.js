import React, { useEffect, useState } from 'react';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import GoogleLogo from '../../assets/img/google.svg'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../Firebase/Firesbase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const provider = new GoogleAuthProvider();
const Login = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(
        {
            email: "",
            password: "",
        }
    )
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        genaral: "",
    });
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
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" })
        } else {
            setErrors({ ...errors, email: "Invalid email" })
        }
    }
    const handdlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" })
        } else {
            setErrors({ ...errors, password: "Invalid password at least 6 charecter" });
        }

    }
    const handdleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }
    useEffect(() => {

        if (hookError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast("Invalid email, Enter valid email");
                    break;

                case "auth/invalid-password":
                    toast("Wrong password!!")
                    break;
                default:
                    toast("something went wrong!!")
            }
        }
    }, [hookError]);


    const location = useLocation();
    const from = loading.state?.from?.pathname || "/checkout"
    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user])
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
                        {errors?.email && <p>{errors.email}</p>}
                        {hookError && <p>{hookError?.message}</p>}
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper'>
                            <input type='password' name='password' onChange={handdlePasswordChange} />

                        </div>
                        <p>{errors.password}</p>
                    </div>
                    <button type='submit' className='auth-form-submit'>
                        Login
                    </button>
                    <ToastContainer></ToastContainer>
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