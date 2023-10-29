import React, { useState } from "react";
import Technician from "./Technician.js";
import "./TechniciansGroup.css";

export default function TechniciansGroup() {
  return (
    <div className="row technicians">
      <Technician />
      <Technician />
      <Technician />
      <Technician />
    </div>
  );
}
