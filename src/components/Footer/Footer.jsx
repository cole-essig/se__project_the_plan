import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "./Footer.css";
import Cole from "../../assets/img/headshot-cole.png";
import Benedict from "../../assets/img/headshot-bj.png";

function Footer() {
  const [isClickedCE, setIsClickedCE] = useState(false);
  const [isClickedBJ, setIsClickedBJ] = useState(false);

  const onClickCe = () => {
    setIsClickedCE(!isClickedCE);
  };
  const onClickBj = () => {
    setIsClickedBJ(!isClickedBJ);
  };

  return (
    <div className="footer">
      <div className="footer__head">
        <img src={Logo} alt="turkey logo" className="footer__logo" />
        <h2 className="footer__title"></h2>
      </div>
      <div className="footer__links">
        <Link className="footer__link" to="/home">
          <p className="footer__navigation">Home</p>
        </Link>
        <Link className="footer__link" to="/home/about">
          <p className="footer__navigation">About Us</p>
        </Link>
        <Link
          className="footer__link"
          to="https://github.com/cole-essig/se__project_the_plan"
        >
          <p className="footer__navigation">Github</p>
        </Link>
      </div>
      <div
        className={`footer__popup_cole ${
          isClickedCE ? "footer__popup_open" : ""
        }`}
      >
        <img
          src={Cole}
          alt="Image of Creator Cole"
          className="footer__picture"
        />
        <Link className="footer__link" to="https://github.com/cole-essig">
          <p className="footer__popup-text">Cole Essig</p>
        </Link>
      </div>
      <div
        className={`footer__popup_bj  ${
          isClickedBJ ? "footer__popup_open" : ""
        }`}
      >
        <img
          src={Benedict}
          alt="Image of Creator Cole"
          className="footer__picture"
        />
        <Link className="footer__link" to="https://github.com/bjthe4">
          <p className="footer__popup-text">Benedict Iroha</p>
        </Link>
      </div>
      <div className="footer__person_icons">
        <button className="footer__person" onClick={onClickCe}>
          C.E.
        </button>
        <button className="footer__person" onClick={onClickBj}>
          B.I.
        </button>
      </div>
      <div className="footer__copyright_box">
        <p className="footer__copyright">© 2024 Thanks Giving </p>
      </div>
    </div>
  );
}

export default Footer;
