import React from "react";
import "./RecipeCard.css"

function RecipeCard({ item, cardDelete }) {
  const handleCardDelete = () => {
    cardDelete(item.id);
  };

  return (
    <li className="card">
      <button type='button' className='card__delete' onClick={handleCardDelete}></button>
      <p className="card__name">{item.dish}</p>
      <p className="card__servings">{`Servings: ${item.servings}`}</p>
    </li>
  )
}

export default RecipeCard;