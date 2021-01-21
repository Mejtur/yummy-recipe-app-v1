import React from 'react'

function SingleRecipe({recipe}) {
    console.log(recipe);
    return (
        <div className="singleRecipe">
            <img src={recipe.recipe.image} alt={recipe.image} className="singleRecipe__image"/>
            <div className="singleRecipe__textContainer">
                <p className="singleRecipe__name">{recipe.recipe.label}</p>
                <div className="singleRecipe__labelsContainer">
                    {recipe.recipe.healthLabels.map(healthLabel => <p className="singleRecipe__label">{healthLabel}</p>)}
                </div>
                <p className="singleRecipe__title">Ingredients:</p>
                <div className="singleRecipe__ingredientLinesContainer">
                    {recipe.recipe.ingredientLines.map(ingredientLines=><p className="singleRecipe__ingredientLines">{ingredientLines}</p>)}
                </div>
            </div>
        </div>
    )
}

export default SingleRecipe
