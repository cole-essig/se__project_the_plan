import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddDishForm from "../AddDishFormModal/AddDishFormModal";
import Recipes from "../Recipes/Recipes";
import Footer from "../Footer/Footer";
import HomeB from '../../assets/img/log-cabin.svg'
import { startingRecipes } from "../../utils/constants"
import "./CreatePlan.css";

function CreatePlan() {
    const [activeModal, setActiveModal] = useState('');
    const [recipeList, setRecipeList] = useState([]);

    const handleAddClick = () => {
        setActiveModal('add');
      };

    const closeActiveModal = () => {
        setActiveModal('');
      };

    const onAddItem = ({ dish, serving, link }) => {
       setRecipeList([{dish: dish, servings: serving, url: link, id: Math.random()}, ...recipeList]);
    }

    const cardDelete = (Id) => {
        setRecipeList(recipeList.filter(item => item.id !== Id))
    }

    useEffect(() => {
        setRecipeList(startingRecipes);
    }, []);

return (
    <div className="createPlans">
      <Link to="/home" className="createPlans__home-link">
        <image src={HomeB} alt="home icon" className="createPlans__home-image" />
      </Link>
      <Recipes recipeList={recipeList} cardDelete={cardDelete} handleAddClick={handleAddClick} />
      <Footer />
      {activeModal === 'add' && <AddDishForm onAddItem={onAddItem} handleModalClose={closeActiveModal} isOpen={activeModal === 'add'} />}
    </div>
)
}

export default CreatePlan;