import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import "./Footer.css";

function Footer() {
const [isClickedCE, setIsClickedCE] = useState(false);
const [isClickedBJ, setIsClickedBJ] = useState(false);

const onClickCe = () => {
  setIsClickedCE(!isClickedCE)
}
const onClickBj = () => {
    setIsClickedBJ(!isClickedBJ)
  }

  return (
    <div className="footer">
        <div className="footer__head">
          <img src={Logo} alt="turkey logo" className="footer__logo" />
          <h2 className="footer__title">Solus Aedifi</h2>
        </div>
      <div className="footer__links">
        <Link className="footer__link"  to="/home">
          <p className="footer__navigation">Home</p>
        </Link>
        <Link className="footer__link" to="/home/about-us">
          <p className="footer__navigation">About Us</p>
        </Link>
        <Link className="footer__link" to="https://github.com/cole-essig/se__project_the_plan">
          <p className="footer__navigation">Github</p>
        </Link>
      </div>
      <div className={`footer__popup_cole ${isClickedCE ? "footer__popup_open" : ""}`}>
        <img src="src\assets\headshot-cole.png" alt="Image of Creator Cole" className="footer__picture"/>
        <Link className="footer__link" to='https://github.com/cole-essig'>
          <p className="footer__popup-text">Check me out</p>
        </Link>
      </div>
      <div className={`footer__popup_bj  ${isClickedBJ ? "footer__popup_open" : ""}`}>
      <img src="src\assets\headshot-bj.png" alt="Image of Creator Cole" className="footer__picture"/>
        <Link className="footer__link" to='https://github.com/bjthe4'>
          <p className="footer__popup-text">Check me out</p>
        </Link>
      </div>
      <div className="footer__person_icons">
        <button className="footer__person" onClick={onClickCe}>CE</button>
        <button className="footer__person" onClick={onClickBj}>BJI</button>
      </div>
      <div className="footer__copyright_box">
        <p className="footer__copyright">© 2023 COLE ESSIG BJ IROHA || Solus Aedifi</p>
      </div>
    </div>
  )
}

export default Footer;