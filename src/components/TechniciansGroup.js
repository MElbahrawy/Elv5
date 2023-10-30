import React, { useState } from "react";
import Technician from "./Technician.js";
import "./TechniciansGroup.css";

export default function TechniciansGroup() {
  return (
    <div className="row technicians">
      <Technician name="محمد البحراوي" city="بنها" gov="قليوبية" />
      <Technician name="محمد البحراوي" city="بنها" gov="قليوبية" />
      <Technician name="محمد البحراوي" city="بنها" gov="قليوبية" />
      <Technician name="محمد البحراوي" city="بنها" gov="قليوبية" />
    </div>
  );
}
