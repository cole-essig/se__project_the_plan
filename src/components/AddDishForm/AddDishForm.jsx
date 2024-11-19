import React from "react";
import { useState } from "react";
import "./AddDishForm.css";

function AddDishForm({onClick}) {
    const [dish, setDish] = useState('');
    const handleDishChange = (e) => {
        setDish(e.target.value);
    }
    const [serving, setServing] = useState('');
    const handleServingChange = (e) => {
        setServing(e.target.value);
    }
    const [link, setLink] = useState('');
    const handleLinkChange = (e) => {
        setLink(e.target.value);
    }
return (
    <div className="addDish">
      <div className="addDish__form">
      <label htmlFor='dish' className='addDish__label'>
                Dish Name{" "}
                <input 
                    type='text'
                    className='addDish__input'
                    id='dish'
                    placeholder='Dish Name'
                    value={dish}
                    onChange={handleDishChange}
                />
            </label>
            <label htmlFor='servings' className='addDish__label'>
                Servings{" "}
                <input 
                    type='number'
                    className='addDish__input'
                    id='servings'
                    placeholder='Serving total'
                    onChange={handleServingChange}
                    value={serving}
                />
            </label>
            <label htmlFor='recipe-link' className='addDish__label'>
                Recipe Link{" "}
                <input 
                    type='url'
                    className='addDish__input'
                    id='reciper-url'
                    placeholder='Recipe Link'
                    onChange={handleLinkChange}
                    value={link}
                />
            </label>
            <button className="addDish__button" onClick={onClick}>Submit</button>
      </div>
    </div>
)
}

export default AddDishForm;