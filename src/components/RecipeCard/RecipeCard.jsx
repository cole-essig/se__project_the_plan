import React, { useState } from "react";
import Logo from "../../assets/img/logo.svg";
import "./RecipeCard.css"

function RecipeCard({ item, cardDelete }) {
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => {
    setIsClicked(!isClicked);
  }
  const handleCardDelete = () => {
    cardDelete(item.id);
  };

  return (
    <li className="card" onClick={onClick}>
      <img src={Logo} alt="turkey logo" className={`card__pin ${isClicked ? "card__pin_open" : ''}`} />
      <button type='button' className='card__delete' onClick={handleCardDelete}></button>
      <p className="card__name">{item.dish}</p>
      <p className="card__servings">{`Servings: ${item.servings}`}</p>
    </li>
  )
}

export default RecipeCard;