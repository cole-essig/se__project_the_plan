import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import HomeButton from "../../assets/img/log-cabin.svg";
import "./About.css";

function About() {
  return (
    <div className="about">
      <Link to="/home" className="about__link">
        <img src={HomeButton} alt="Home button" className="about__home-image" />
      </Link>
      <div className="about__content">
        <h2 className="about__title">The Recipe Of Thanks</h2>
        <p className="about__text">
          Planning for Thanksgiving has never been easier or more fun! Our
          platform helps you effortlessly organize the big day by tracking
          portions, guest lists, and who's bringing what. We even provide links
          to delicious recipes, so you can plan ahead and make sure every dish
          is a hit. In the future, we’re excited to introduce even more features
          to take your Thanksgiving planning to the next level! Soon, you'll be
          able to track your guests' allergies and dietary preferences to ensure
          everyone can enjoy a safe and delicious meal. You’ll also be able to
          manage total servings and portions more effectively, helping you avoid
          food waste while ensuring no one leaves hungry. We’re also working on
          a new feature that lets you create multiple meal plans with unique key
          instances, so you can offer different options and let your guests vote
          on their favorites. Plus, custom logins and personalized tracking will
          make your planning even smoother. After the event, we’ll introduce
          anonymous dish reviews, so you can get honest feedback on every
          recipe. For those mindful of their intake, a calorie tracker will be
          available to keep things healthy without compromising on flavor. Let
          us help you make your Thanksgiving memorable, stress-free, and
          perfectly tailored to your guests’ needs! Check out the creators in
          the footer below!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
