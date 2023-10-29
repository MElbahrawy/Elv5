import React from "react";
import Company from "./Company";
import "./CompaniesGroup.css";
export default function CompaniesGroup() {
  return (
    <div className="row companies">
      <Company />
      <Company />
      <Company />
      <Company />
      <Company />
      <Company />
    </div>
  );
}
