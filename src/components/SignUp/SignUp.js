import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from "react-router-dom";
import GoogleLogo from '../../assets/img/google.svg'
import auth from "../../Firebase/Firesbase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
const provider = new GoogleAuthProvider();
const Signup = () => {


    const [userInfo, setUserInfo] = useState(
        {
            email: "",
            password: "",
            confirmPassword: "",

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
                // console.log(user);
                navigate("/")
            }).catch((error) => {

                const errorMessage = error.message;
                // console.log(errorMessage);
            });
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

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
            setErrors({ ...userInfo, password: "Invalid password at least 6 charecter" });
        }

    }
    const haddleConfirmPasswordChange = (e) => {

        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPassword: e.target.value });
            setErrors({ ...errors, password: "" })
        } else {
            setErrors({ ...userInfo, password: "password does not match" });
        }

    }
    const handdleSignIn = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
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
    const navigate = useNavigate();
    const location = useLocation();
    const from = loading.state?.from?.pathname || "/"
    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user])
    return (
        <div className='form-container '>
            <div className='Login-form'>
                <h1> Please Sign Up</h1>
                <form onSubmit={handdleSignIn}>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper'>
                            <input type='email' name='email' id='email' onChange={handdleEmailChange} required />
                        </div>
                        {errors?.email && <p>{errors.email}</p>}
                        {hookError && <p>{hookError?.message}</p>}
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper'>
                            <input type='password' name='password' id='password' onChange={handdlePasswordChange} required />
                        </div>
                        <p>{errors.password}</p>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <div className='input-wrapper'>
                            <input
                                type='password'
                                name='confirmPassword'
                                id='confirm-password'
                                onChange={haddleConfirmPasswordChange} required
                            />

                        </div>
                        <h6>{errors.confirmPassword}</h6>
                    </div>

                    <button type='submit' className='submit-button'>
                        Sign Up
                    </button>
                    <ToastContainer></ToastContainer>
                </form>
                <p className='create-account'>
                    Already have an account?{" "}
                    <span onClick={() => navigate("/login")}>Login</span>
                </p>
                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p className="horizontal-para">or</p>
                    <div className='line-right' />
                </div>
                <div className='input-wrapper'>
                    <button className='google-logo' onClick={googleAuth}>
                        <img src={GoogleLogo} alt='' />
                        <p> Continue with Google </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;