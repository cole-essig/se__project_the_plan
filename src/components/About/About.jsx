import React from "react";
import Footer from "../Footer/Footer";
import "./About.css"

function About() {
  return (
    <div className="about">
      <div className="about__content">
        <h2 className="about__title">About This Project</h2>
        <p className="about__text">Planning for Thanksgiving has never been easier or more fun! 
            Our platform helps you effortlessly organize the big day by tracking portions, guest lists, and who's bringing what. 
            We even provide links to delicious recipes, so you can plan ahead and make sure every dish is a hit.
            In the future, we’re excited to offer custom logins, personalized tracking, anonymous dish reviews after the celebration, 
            and even a calorie tracker for those mindful of their intake. Let us help you make your Thanksgiving memorable and stress-free!
            Check out the creators in the the footer below!
        </p>
      </div>
      <Footer />
    </div>
  )
}


export default About;