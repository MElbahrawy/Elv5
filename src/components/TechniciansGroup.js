import React from "react";
import Technician from "./Technician";
import "./TechniciansGroup.css";

export default function TechniciansGroup() {
  return (
    <div className="row technicians">
      <Technician />
      <Technician />
      <Technician />
      <Technician />
      <Technician />
      <Technician />
    </div>
  );
}
