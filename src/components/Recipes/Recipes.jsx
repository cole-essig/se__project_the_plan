import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./Recipes.css";

function Recipes({ recipeList }) {
return (
    <div className="recipes">
        <p className="recipes__header">Your Recipes</p>
        <ul className="recipes__cards_list">
            {recipeList.map((item) => {
               return <RecipeCard key={item.id} item={item} />; 
            })}
        </ul>
    </div>
)
}

export default Recipes;