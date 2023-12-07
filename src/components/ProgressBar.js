import React from "react";
import "./ProgressBar.css";

export default function ProgressBar({ phase, phases }) {
  return (
    <div className="Phases">
      <div
        className="progress"
        style={{
          width: `${(phase + 1) * (100 / phases.length)}%`,
        }}
      ></div>
      <span>مرحله 1</span>
      <span>مرحله 2</span>
      <span>مرحله 3</span>
    </div>
  );
}
