import React from "react";
import "./RecipeCard.css"

function RecipeCard({ item }) {
  return (
    <li className="card">
      <p className="card__name">{item.dish}</p>
      <p className="card__servings">{`Servings: ${item.servings}`}</p>
    </li>
  )
}

export default RecipeCard;