import React from "react";
import ing from "../img/engineer-worker-svgrepo-com.png";
import elv from "../img/elevator-svgrepo-com.png";
import buld from "../img/buildings-building-svgrepo-com.png";
import "./Categories.css";
export default function Categories() {
  return (
    <div className="categories">
      <div className="container">
        <h2 className="text-center">بوابتك لعالم المصاعد الذكية في مصر</h2>
        <div className="row">
          <div className="category col-md-4 col-sm-12">
            <img src={ing} alt="" />
            <h3>الفنيين</h3>
          </div>
          <div className="category col-md-4 col-sm-12">
            <img src={elv} alt="" />
            <h3>عروض المصاعد</h3>
          </div>
          <div className="category col-md-4 col-sm-12">
            <img src={buld} alt="" />
            <h3>الشركات</h3>
          </div>
        </div>
      </div>
    </div>
  );
}