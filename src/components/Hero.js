import React from "react";
import "./Hero.css";
import Logo from "../img/Logo3-03.png";
import { Link } from "react-router-dom";
export default function Heading() {
  return (
    <section id="hero-section">
      <div className="img-holder"></div>
      <div className="hero-heading ">
        <img src={Logo} alt="" className="center" />
        <p>
          طريقك الي جيل جديد من المصاعد الذكية <br />
          الآن من مكان واحد تستطيع الحصول على كل ما يخص المصاعد في مصر
        </p>
        <Link to="/" className="google-play">
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="Get it on Google play"
          />
        </Link>
      </div>
    </section>
  );
}
