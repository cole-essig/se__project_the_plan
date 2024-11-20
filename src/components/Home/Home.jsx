import React from "react";
import { useState } from "react";
import Footer from "../Footer/Footer";
import "./Home.css";
import dinner from "../../assets/img/ThanksGiving_dinner.png";
import recipes from "../../assets/img/ThanksGiving_recipes.png";
// import shelf from "../../assets/img/ThanksGiving_shelf.png";
import Recipes from "../../assets/img/ThanksGiving_button-Re.png";
import bench from "../../assets/img/BENCH.svg";
import information from "../../assets/img/ThanksGiving_button-information.png";
import arrow from "../../assets/img/arrow.svg";
import { Link } from "react-router-dom";

function Home() {
  const onClick = () => {
    console.log("Jelloo");
  };

  // const handleClick = () => {
  //   console.log("Styled image button clicked!");
  // };

  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  const handleReadMoreClick = () => {
    setIsParagraphVisible((prev) => !prev);
  };

  return (
    <div className="home">
      <nav className="nav">
        <ul className="nav__links">
          <li>
            <Link to="/home" className="nav__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/home/about" className="nav__link">
              About
            </Link>
          </li>
          <li>
            <Link to="/home/recipes" className="nav__link">
              Recipes
            </Link>
          </li>
        </ul>
        <ul className="home__nav-recipes">
          <img
            src={Recipes}
            alt="Recipe"
            className="home__button-recipe"
            // onClick={onClick}
          />
          <img
            src={recipes}
            alt="myrecipes"
            className="home__button-myrecipe"
            // onClick={onClick}
          />
        </ul>
      </nav>
      <div className="home__middle">
        <img src={arrow} alt="arrow" className="home__arrow" />
        <div className="home__items">
          <img src={dinner} alt="food" className="home__food" />
          <img src={bench} alt="shelf" className="home__shelf" />
        </div>
        <div className="home__text">
          <h3 className="home__header">THANKSGIVING DAY</h3>
          <span className="home__thanks">THANKS</span>
          <span className="home__giving">GIVING</span>
          <img
            src={information}
            alt="ReadMe"
            className="home__button-information"
            onClick={handleReadMoreClick}
          />
          {isParagraphVisible && (
            <p className="home__paragraph">
              Thanksgiving is a time to gather with loved ones, enjoy delicious
              meals, and reflect on the blessings of the past year. Celebrate
              the holiday with gratitude and joy!
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
