import React from "react";
import "./Phase1.css";

export default function Phase1() {
  const clickHandler = (e) => {
    console.log(e.target.innerHTML);
  };
  return (
    <div className="account-type">
      <button onClick={clickHandler}>مالك</button>
      <button onClick={clickHandler}>فني</button>
    </div>
  );
}
