import React from 'react'
import aboutImg1 from '../images/about1.png';
import aboutImg2 from '../images/about2.png';


function About() {
    return (
        <div className="about">
            <div className="about__container">
                <p className="about__title left">ABOUT <span className="grey">US</span></p> 
                <div className="about__flex">
                    <div className="about__textContainer">
                    <p className="about__subtitle">Why we</p>
                    <p className="about__text">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque 
                    laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto .</p>
                    </div>
                    <img src={aboutImg1} alt="about 1" className="about__image"/>
                </div>
                <p className="about__subtitle">We are the leader when we talk about recipes in the internet </p>
                <p className="about__text">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi  
                sequi </p>
                <p className="about__title right"><span className="grey">OUR</span> FUTURE</p>
                <p className="about__subtitle">We try to...</p>
                <p className="about__text">Sed ut perspiciatis, unde omnis iste natus error sit 
                voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta sunt qui ratione voluptatem sequi nesciunt, neque 
                porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur</p>
                <div className="about__flex">
                <img src={aboutImg2} alt="about 2" className="about__image"/>
                <div className="about__textContainer">
                    <p className="about__subtitle">Our team</p>
                    <p className="about__text">Sed ut perspiciatis, unde omnis iste natus error sit 
                    voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab 
                    illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. 
                    Nemo enim ipsam voluptatem, quia voluptas sit consectetur</p>
                    <button className="btn">JOIN US</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About
