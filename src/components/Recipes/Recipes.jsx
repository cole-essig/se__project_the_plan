import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import SideBar from "../SideBar/Sidebar";
import "./Recipes.css";

function Recipes({ recipeList, cardDelete, handleAddClick }) {
return (
    <div className="recipes">
        <SideBar />
        <div>
            <div className="recipes__header">
                <p className="recipes__title">Your Recipes</p>
                <button className="recipes__button" type="button" onClick={handleAddClick}>Add New Recipe+</button>
            </div>
            <ul className="recipes__cards_list">
                {recipeList.map((item) => {
                return <RecipeCard key={item.id} item={item} cardDelete={cardDelete} />; 
                })}
            </ul>
        </div>
    </div>
)
}

export default Recipes;