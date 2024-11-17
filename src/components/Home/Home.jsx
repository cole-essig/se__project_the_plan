import React from "react";
import { useState } from "react";
import TopDish from "../TopDish/TopDish";
import Footer from "../Footer/Footer"
import "./Home.css";

function Home() {
    const onClick = () => {
        console.log("hey")
    }
  return (
    <div className="home">
        <h2 className="home__title">Welcome!</h2>
        <button className="home__create-meal-button" onClick={onClick}>Create Your Perfect Meal</button>
        <TopDish />
        <Footer />
    </div>
  )
}

export default Home;