import React from 'react'
import Nav from '../components/Nav'
import salad from '../images/salad.png';
import {FaTwitter, FaFacebookF, FaInstagram} from 'react-icons/fa';


function Home() {
    return (
        <div className="home">
            <Nav />
            <div className="home__container">
            <div className="home__columnLeft">
                <div className="home__colLeft"></div>
            </div>
            <div className="home__columnRight">
                <div className="home__textContainer">
                    <h1 className="home__title">DELICOUS</h1>
                    <h3 className="home__subtitle">Foods Place. Best - Recipes</h3>
                    <p className="home__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, vel ratione. 
                    Unde perferendis laboriosam aliquam? Nisi rem omnis deleniti repudiandae 
                    accusamus a consequatur sequi, illum nihil, vitae dolor ea accusantium.</p>
                    <button className="btn">CHECK RECIPES</button>
                </div>
                <img src={salad} alt="Salad image" className="home__salad"/>
                <div className="home__social">
                    <FaFacebookF className="home__socialIcon facebook"/>
                    <FaTwitter className="home__socialIcon twitter"/>
                    <FaInstagram className="home__socialIcon instagram"/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home
