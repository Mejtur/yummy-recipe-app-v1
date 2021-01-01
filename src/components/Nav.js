import React, {useState, useEffect} from 'react'
import {BsPersonFill} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import Logout from './Logout';
import Login from './Login';
import {auth} from '../firebase';
import {login, logout, selectUser} from '../features/userSlice';
import {Link} from 'react-router-dom';

function Nav() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            dispatch(login({
              uid: authUser.uid,
              email: authUser.email,
            }))
          } else {
            dispatch(logout());
          }
        })
      }, [dispatch])

    const [sidebarIsOpen,setSidebarIsOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    return (
        <div className="nav">
            <div className="nav__container">
            <div className="nav__links">
              <Link style={{ textDecoration: 'none' }} to="/">
                <p className="nav__link">Home</p>
              </Link>
              <Link style={{ textDecoration: 'none' }} to="/recipes">
                <p className="nav__link">Recipes</p>
              </Link>
              <Link style={{ textDecoration: 'none' }} to="/about">
                <p className="nav__link">About</p>
              </Link>
              <Link style={{ textDecoration: 'none' }} to="/events">
                <p className="nav__link">Events</p>
              </Link>
                <div className="nav__icons">
                    <div className="nav__heart">
                      <Link style={{ textDecoration: 'none' }} to="/favourites">
                        <AiOutlineHeart className="nav__icon"/>
                      </Link>
                    </div>
                    <div className="nav__heart">
                        <BsPersonFill className="nav__icon" onClick={()=>{setIsLoginOpen(true)}}/>
                    </div>
                </div>
            </div>
            <div className="nav__hamburger">
                <GiHamburgerMenu className="nav__burger" onClick={()=>setSidebarIsOpen(true)}/>
            </div>
            </div>
            <Sidebar sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} setIsLoginOpen={setIsLoginOpen} isLoginOpen={isLoginOpen}/>
            {isLoginOpen && !user && <Login setIsLoginOpen={setIsLoginOpen} />}
            {isLoginOpen && user && <Logout setIsLoginOpen={setIsLoginOpen} />}
        </div>
    )
}

export default Nav
