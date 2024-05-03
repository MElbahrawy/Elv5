import React from "react";
import { Link } from "react-router-dom";
import ing from "../../img/engineer-worker-svgrepo-com.png";
import elv from "../../img/elevator-svgrepo-com.png";
import buld from "../../img/buildings-building-svgrepo-com.png";
import "./Categories.css";

export default function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <h2 className="text-center">بوابتك لعالم المصاعد الذكية في مصر</h2>
        <div className="row">
          <Link to="/technicians" className="category col-md-4 col-sm-12">
            <img src={ing} alt="technicians" />
            <h3>الفنيين</h3>
          </Link>
          <a href="#main-adv" className="category col-md-4 col-sm-12">
            <img src={elv} alt="Offers" />
            <h3>عروض المصاعد</h3>
          </a>
          <Link to="/Companies" className="category col-md-4 col-sm-12">
            <img src={buld} alt="Companies" />
            <h3>الشركات</h3>
          </Link>
        </div>
      </div>
    </section>
  );
}
