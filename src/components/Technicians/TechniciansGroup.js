import React, { useState } from "react";
import Technician from "./Technician.js";
import "./TechniciansGroup.css";

export default function TechniciansGroup() {
  const techniciansData = [
    {
      id: "1",
      name: "محمد البحراوي",
      city: "بنها",
      gov: "قليوبية",
    },
    {
      id: "2",
      name: "محمد البحراوي",
      city: "بنها",
      gov: "قليوبية",
    },
    {
      id: "3",
      name: "محمد البحراوي",
      city: "بنها",
      gov: "قليوبية",
    },
    {
      id: "4",
      name: "محمد البحراوي",
      city: "بنها",
      gov: "قليوبية",
    },
  ];
  return (
    <div className="row technicians">
      {techniciansData.map((tech) => (
        <Technician
          key={tech.id}
          name={tech.name}
          city={tech.city}
          gov={tech.gov}
        />
      ))}
    </div>
  );
}
