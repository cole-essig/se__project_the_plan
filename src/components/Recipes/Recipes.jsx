import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import SideBar from "../SideBar/Sidebar";
import "./Recipes.css";
import chef from "../../assets/img/colp_lenu_140724.jpg";

function Recipes({ recipeList, cardDelete, handleAddClick }) {
  return (
    <div className="recipes">
      <SideBar />
      <div className="recipes__content">
        <div className="recipes__header">
          <p className="recipes__title">Your Recipes</p>
          <button
            className="recipes__button"
            type="button"
            onClick={handleAddClick}
          >
            Add New Recipe+
          </button>
        </div>
        <ul className="recipes__cards_list">
          {recipeList.map((item) => {
            return (
              <RecipeCard key={item.id} item={item} cardDelete={cardDelete} />
            );
          })}
          {/* <img src={chef} alt="chef" className="recipe__chef" /> */}
        </ul>
      </div>
    </div>
  );
}

export default Recipes;
