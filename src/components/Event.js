import React from 'react'

function Event({title,location,text,img,date}) {
    return (
        <div className="event">
            <img src={img} alt="event image" className="event__image"/>
            <div className="event__textContainer">
                <p className="event__title">{title}</p>
                <div className="event__flex">
                    <p className="event__location">{location}</p>
                    <p className="event__date">{date}</p>
                </div>
                <p className="event__text">{text}</p>
            </div>
        </div>
    )
}

export default Event
