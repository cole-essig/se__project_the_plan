import React from "react";
import { useState, useEffect } from "react";
import AddDishForm from "../AddDishForm/AddDishForm";
import Recipes from "../Recipes/Recipes";
import Footer from "../Footer/Footer";
import { startingRecipes } from "../../utils/constants"
import "./CreatePlan.css";

function CreatePlan() {
    const [recipeList, setRecipeList] = useState([]);
    const onAddItem = ({ dish, serving, link }) => {
       setRecipeList([{dish: dish, servings: serving, url: link, id: Math.random()}, ...recipeList]);
    }

    useEffect(() => {
        setRecipeList(startingRecipes);
    }, []);

return (
    <>
      <AddDishForm onAddItem={onAddItem} />
      <Recipes recipeList={recipeList}/>
      <Footer />
    </>
)
}

export default CreatePlan;