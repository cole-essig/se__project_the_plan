import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
const [isClickedCE, setIsClickedCE] = useState(false);
const [isClickedBJ, setIsClickedBJ] = useState(false);

const onClickCe = () => {
  setIsClickedCE(true)
}
const onClickBj = () => {
    setIsClickedBJ(true)
  }

  return (
    <div className="footer">
        <div className="footer__head">
          <img src="src\assets\logo.svg" alt="turkey logo" className="footer__logo" />
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
      <div className={`"footer__popup_cole" ${isClickedCE ? "footer__popup_open" : ""}`}>
        <p>Wassap!</p>
      </div>
      <div className={`"footer__popup_bj" ${isClickedBJ ? "footer__popup_open" : ""}`}>
        <p>Wassuuup!!</p>
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