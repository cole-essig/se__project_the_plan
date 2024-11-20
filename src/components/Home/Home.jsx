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
        <ul className="nav-links">
          <li>
            <Link
              to="/home"
              className="navlink"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/home/about"
              className="navlink"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/home/recipes"
              className="navlink"
            >
              Recipes
            </Link>
          </li>
        </ul>
        <ul className="homenav-recipes">
          <img
            src={Recipes}
            alt="Recipe"
            className="homebutton-recipe"
            onClick={onClick}
          />
          <img
            src={recipes}
            alt="myrecipes"
            className="homebutton-myrecipe"
            // onClick={onClick}
          />
        </ul>
      </nav>
      <div className="homemiddle">
        <img src={arrow} alt="arrow" className="homearrow" />
        <div className="homeitems">
          <img src={dinner} alt="food" className="homefood" />
          <img src={bench} alt="shelf" className="homeshelf" />
        </div>
        <div className="hometext">
          <h3 className="homeheader">THANKSGIVING DAY</h3>
          <span className="homethanks">THANKS</span>
          <span className="homegiving">GIVING</span>
          <img
            src={information}
            alt="ReadMe"
            className="homebutton-information"
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