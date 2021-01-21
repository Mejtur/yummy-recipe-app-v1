import React from 'react'
import logo from '../images/logo.png';
import {GrClose} from 'react-icons/gr';
import {Link} from 'react-router-dom';

function Sidebar({sidebarIsOpen, setSidebarIsOpen, isLoginOpen, setIsLoginOpen}) {
    return (
        <div className={sidebarIsOpen ? "sidebar":"sidebar hide"}>
            <div className="sidebar__logoContainer">
                <img src={logo} alt="sidebar logo" className="sidebar__logo"/>
            </div>
            <div className="sidebar__links">
                <ul>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <li>HOME</li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/recipes">
                    <li>RECIPES</li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/about">
                    <li>ABOUT</li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/events">
                    <li>EVENTS</li>
                </Link>
                {/* <Link style={{ textDecoration: 'none' }} to="/favourites">
                    <li>FAVOURITES</li>
                </Link> */}
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
