import React, {useState} from 'react'
import axios from 'axios';
import SingleRecipe from '../components/SingleRecipe';
import {api_Key, api_ID} from '../foodApi';
import {VscSearch} from 'react-icons/vsc';
import { v4 as uuidv4 } from "uuid";

// import Search from '../components/Search';
function Recipes() {
    const [query,setQuery] = useState("");
    const [recipes,setRecipes] = useState([]);
    const url = `https://api.edamam.com/search?q=${query}&app_id=${api_ID}&app_key=${api_Key}`;


    const getData = async () => {

        const data = await axios.get(url);
        setRecipes(data.data.hits);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getData();
    }

    console.log(query);
    console.log(recipes);
    return (
        <div className="recipes">
            <div className="recipes__container">
                {/* <Search /> */}
                <div className="search">
                    <p className="search__title">FIND A RECIPE</p>
                    <div className="search__inputContainer">
                    <input type="text" placeholder="Select a recipe" className="search__input" 
                    onChange={(e)=>setQuery(e.target.value)} value={query} />
                    <VscSearch className="search__icon" onClick={onSubmit}/>
                    </div>
                </div>
                <p className="recipes__title">RECIPES</p>
                {recipes !== [] &&
                recipes.map(recipe => <a href={recipe.recipe.url} target="_blank"><SingleRecipe key={uuidv4()} recipe={recipe} /></a>)}
            </div>
        </div>
    )
}

export default Recipes
