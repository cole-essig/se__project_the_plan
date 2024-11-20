import React, { useState } from "react";
import "./AddDishFormModal.css";

function AddDishForm({ onAddItem, handleModalClose, isOpen }) {
    const [dish, setDish] = useState('');
    const handleDishChange = (e) => {
        setDish(e.target.value);
        console.log(dish);
    }
    const [serving, setServing] = useState('');
    const handleServingChange = (e) => {
        setServing(e.target.value);
    }
    const [link, setLink] = useState('');
    const handleLinkChange = (e) => {
        setLink(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!dish || !serving || !link) {
            alert("All fields must be filled out.");
            return;
        }
        onAddItem({ dish, serving, link });
    }

    return (
        <div className={`addDish ${isOpen ? "modal_opened" : ""}`}>
            <div className="addDish__form">
            <button type='button' className='addDish__delete-button' onClick={handleModalClose}></button>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='dish' className='addDish__label'>
                        Dish Name
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
                        Servings
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
                        Recipe Link
                        <input
                            type='url'
                            className='addDish__input'
                            id='recipe-link'
                            placeholder='Recipe Link'
                            onChange={handleLinkChange}
                            value={link}
                        />
                    </label>
                    <button className="addDish__button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddDishForm;