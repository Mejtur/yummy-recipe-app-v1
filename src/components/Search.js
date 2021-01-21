import React from 'react'
import {VscSearch} from 'react-icons/vsc';

function Search() {
    return (
        <div className="search">
            <p className="search__title">FIND A RECIPE</p>
            <div className="search__inputContainer">
                <input type="text" placeholder="Select a recipe" className="search__input"/>
                <VscSearch className="search__icon"/>
            </div>
            <div className="search__textContainer">
                {/* <div className="search__column">

                </div>
                <div className="search__column">

                </div>
                <div className="search__column">

                </div> */}
            </div>
        </div>
    )
}

export default Search
