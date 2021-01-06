import React from 'react'
import Event from '../components/Event';

function Events() {
    return (
        <div className="events">
            <div className="events__container">
                <p className="events__title">EVENTS</p>
                <Event 
                    title="Good Food & Wine Show"
                    location="Cape Town, South Africa"
                    date="21-01-2021"
                    text="If You Like To Get Messy, You Need To Get To Buñol, Outside Valencia, 
                    For The Last Wednesday Of August. That's When Their Annual Tomato-Throwing 
                    Festival—The World's Biggest Food Fight—Takes Place. Revelers Throw Over-Ripe 
                    Tomatoes At Each Other Until Water Cannons Break It Up."
                    img="https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg"
                />
                <Event 
                    title="Pembrokeshire Fish Week"
                    location="Pembrokeshire, Wales"
                    date="26-01-2021"
                    text="Experience This Coastal Wales County's Rich Fishing Heritage During The Weeklong Fish 
                    Festival. Here You Can Sample Restaurants' Fresh Catch Specials, Try Fresh Welsh Oysters,
                    And Maybe Even Learn How To Fish Yourself."
                    img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Wales_%281959%E2%80%93present%29.svg/1920px-Flag_of_Wales_%281959%E2%80%93present%29.svg.png"
                />
                <Event 
                    title="Vermont Cheesemakers Festival"
                    location="Vermont, USA"
                    date="31-01-2021"
                    text="Between Ben & Jerry's and Cabot Creamery, Vermont is certainly best known for its dairy;
                    it actually has the highest number of cheesemakers per capita. The state's Cheesemakers
                    Festival is the best way to sample them all, as well as local beer, wine and spirits, 
                    and all manners of artisanal food products.
                    "
                    img="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
                />
                <Event 
                    title="La Tomatina"
                    location="Buñol, Spain"
                    date="01-02-2021"
                    text="If You Like To Get Messy, You Need To Get To Buñol, Outside Valencia, For The Last 
                    Wednesday Of August. That's When Their Annual Tomato-Throwing Festival—The World's Biggest 
                    Food Fight—Takes Place. Revelers Throw Over-Ripe Tomatoes At Each Other Until Water Cannons 
                    Break It Up.
                    "
                    img="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png"
                />
                <Event 
                    title="New Orleans Wine & Food Experience"
                    location="New Orleans, USA"
                    date="13-02-2021"
                    text="For 23 years now, this Louisiana festival has been pairing up the 
                    distinctive Creole-influenced foods of the region—from crawfish to andouille 
                    sausage—with complementary wines. They also donate part of their profits to food 
                    banks and culinary schools, meaning all the revelry is for a good cause.
                    "
                    img="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
                />
            </div>
        </div>
    )
}

export default Events
