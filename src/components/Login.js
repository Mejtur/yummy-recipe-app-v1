import React, {useState} from 'react'
import logo from '../images/logo.png';
import {FaTwitter, FaFacebookF} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import {AiOutlineClose} from 'react-icons/ai';
import { auth, googleProvider, facebookProvider, twitterProvider } from "../firebase";

function Login({setIsLoginOpen}) {

    // log in with email and password credentials
    const logIn = (e) => {
        e.preventDefault();
        
        auth
            .signInWithEmailAndPassword(email, password)
            .catch((error) => alert(error.message))
            .then(()=>{
                setIsLoginOpen(false);
            })
    }


    // register with email and password credentials
    const register = (e) => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .catch((error) => alert(error.message))
            .then(()=>{
                setIsLoginOpen(false);
            })
    }

    //  sign in with google
    const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider).catch((error) => alert(error.message));
    }
    //  sign in with twitter
    const signInWithTwitter = () => {
        auth.signInWithPopup(twitterProvider).catch((error) => alert(error.message));
    }
    //  sign in with facebook
    const signInWithFacebook = () => {
        auth.signInWithPopup(facebookProvider).catch((error) => alert(error.message));
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="login display">
            <div className="login__container">
                <AiOutlineClose className="login__close" onClick={()=>{setIsLoginOpen(false)}}/>
                <img src={logo} alt="login__logo" className="login__logo"/>
                <input type="text" className="login__textInput" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" className="login__textInput" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className="btn login__btn" onClick={logIn}>LOG IN</button>
                <p className="login__text">Don't have an account?</p>
                <button className="btn login__btn" onClick={register}>REGISTER</button>
                <p className="login__text">Or log in with social media</p>
                <div className="login__social">
                    <FaFacebookF className="login__socialIcon facebook" onClick={signInWithFacebook}/>
                    <FaTwitter className="login__socialIcon twitter" onClick={signInWithTwitter}/>
                    <FcGoogle className="login__socialIcon" onClick={signInWithGoogle}/>
                </div>
            </div>
        </div>
    )
}

export default Login
