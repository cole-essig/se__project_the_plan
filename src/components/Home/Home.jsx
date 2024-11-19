import React from "react";
import { useState } from "react";
import TopDish from "../TopDish/TopDish";
import Footer from "../Footer/Footer";
import AddDishForm from "../AddDishForm/AddDishForm";
import "./Home.css";
import dinner from "../../assets/img/ThanksGiving_dinner.png";
import recipes from "../../assets/img/ThanksGiving_recipes.png";
import shelf from "../../assets/img/ThanksGiving_shelf.png";
import Recipes from "../../assets/img/ThanksGiving_button-Re.png";
import { Nav } from "react-bootstrap";

function Home() {
  const onClick = () => {
    console.log("hey");

    // const handleClick = () => {
    //   alert("Styled image button clicked!");
    // };
  };
  return (
    <div className="home">
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Nav
              to="/home"
              className="nav-link"
              activeClassName="Home__active-link"
              exact
            >
              Home
            </Nav>
          </li>
          <li>
            <Nav
              to="/about"
              className="nav-link"
              activeClassName="Home__active-link"
            >
              About
            </Nav>
          </li>
          <li>
            <Nav
              to="/contact"
              className="nav-link"
              activeClassName="Home__active-link"
            >
              create contact
            </Nav>
          </li>
          <li>
            <Nav
              to="/contact"
              className="nav-link"
              activeClassName="Home__active-link"
            >
              login
            </Nav>
          </li>
        </ul>
        <ul className="home__nav-recipes">
          <img
            src={Recipes}
            alt="Recipe"
            className="home__button-recipe"
            onClick={onClick}
          />
          <img
            src={recipes}
            alt="my__recipes"
            className="home__myrecipe"
            onClick={onClick}
          />
        </ul>
      </nav>
      <div className="home__middle">
        <ul className="home__items">
          <img src={dinner} alt="food" className="home__food" />
          <img src={shelf} alt="shelf" className="home__shelf" />
        </ul>
        <div className="home__text">
          <h3 className="home__header">THANKSGIVING DAY</h3>
          <span className="home__thanks">THANKS</span>
          <span className="home__giving">GIVING</span>
        </div>
      </div>
      {/* <TopDish /> */}
      <Footer />
    </div>
  );
}

export default Home;
