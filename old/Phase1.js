import React from "react";
import "./Phase1.css";

export default function Phase1(props) {
  const { data, setData } = props;

  const clickHandler = (e) => {
    setData({ ...data, type: e.target.innerHTML });
  };

  return (
    <div className="account-type">
      <button onClick={clickHandler}>مالك</button>
      <button onClick={clickHandler}>فني</button>
    </div>
  );
}
