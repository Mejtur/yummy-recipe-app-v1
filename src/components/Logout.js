import React from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import logo from '../images/logo.png';
import {selectUser} from '../features/userSlice';
import { useSelector } from 'react-redux';
import {auth} from '../firebase';

function Logout({setIsLoginOpen}) {
    const user = useSelector(selectUser);
    console.log(user);
    return (
        <div className="login display">
            <div className="login__container">
                <AiOutlineClose className="login__close" onClick={()=>{setIsLoginOpen(false)}}/>
                <img src={logo} alt="login__logo" className="login__logo"/>
                <p className="login__name">Hello {user?.email}</p>
                <button className="btn login__btn" onClick={()=>{auth.signOut()}}>LOGOUT</button>
            </div>
        </div>
    )
}

export default Logout
