import React, { useState } from "react";
import Technician from "./Technician.js";
import { users } from "../../Data/users";
import "./TechniciansGroup.css";

export default function TechniciansGroup() {
  return (
    <div className="row technicians">
      {users
        .filter((tech) => tech.type === "technician")
        .map((tech) => (
          <Technician
            key={tech.id}
            name={tech.firstName + " " + tech.lastName}
            address={tech.address}
          />
        ))}
    </div>
  );
}
