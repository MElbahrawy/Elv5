import React from "react";
import Company from "./Company";
import { companies } from "../../Data/companies";
import "./CompaniesGroup.css";
import { Container } from "react-bootstrap";
export default function CompaniesGroup() {
  return (
    <Container>
    <div className="companies">
      {companies.map((company) => (
        <Company
          key={company.id}
          title={company.title}
          description={company.description}
          location={company.location}
          logo={company.logo}
          website={company.website}
          email={company.email}
          phone={company.phone}
        />
      ))}
    </div>
    </Container>
  );
}
