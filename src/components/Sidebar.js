import React from 'react'
import logo from '../images/logo.png';
import {GrClose} from 'react-icons/gr';

function Sidebar({sidebarIsOpen, setSidebarIsOpen, isLoginOpen, setIsLoginOpen}) {
    return (
        <div className={sidebarIsOpen ? "sidebar":"sidebar hide"}>
            <div className="sidebar__logoContainer">
                <img src={logo} alt="sidebar logo" className="sidebar__logo"/>
            </div>
            <div className="sidebar__links">
                <ul>
                    <li>HOME</li>
                    <li>RECIPES</li>
                    <li>ABOUT</li>
                    <li>EVENTS</li>
                    <li>FAVOURITES</li>
                </ul>
                <button className="btn sidebarBtn" onClick={()=>{setIsLoginOpen(true)}}>LOG IN/REGISTER</button>
            </div>
            <GrClose
            className="sidebar__close"
            onClick={() => {
                setSidebarIsOpen(false);
            }}
            />
        </div>
    )
}

export default Sidebar
