import { companies } from "../../Data/companies";
import { Container } from "react-bootstrap";
import React, { useState } from "react";
import Company from "./Company";
import axios from "axios";

export default function CompaniesGroup() {
  const [companiesData, setCompaniesData] = useState([]);
  axios
    .get("http://localhost:4000/companies")
    .then((res) => res.data)
    .then((data) => setCompaniesData(data))
    .catch(() => setCompaniesData(companies));

  return (
    <Container>
      <div className="d-flex flex-column justify-content-center align-items-center gap-4 my-5">
        {companiesData.map((company) => (
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
