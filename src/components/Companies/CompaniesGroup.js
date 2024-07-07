import { companies } from "../../Data/companies";
import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Company from "./Company";
import axios from "axios";
import { server } from "../../Data/APIs";
import LoadingSpinner from "../Utilities/LoadingSpinner";
import NoData from "../Utilities/NoData";

export default function CompaniesGroup() {
  const [companiesData, setCompaniesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [empty, setEmpty] = useState(false);
  useEffect(() => {
    axios
      .get(server.GetAllCompany)
      .then((res) => res.data)
      .then((data) => {
        setLoading(false);
        setCompaniesData(data);
        Array.isArray(data) && data.length === 0 && setEmpty(true);
      })
      .catch(() => {
        setLoading(false);
        // setCompaniesData(companies);
        setEmpty(true);
      });
  }, []);

  return (
    <Container>
      <div className="d-flex flex-column justify-content-center align-items-center gap-4 my-5">
        {loading && <LoadingSpinner />}
        {empty && <NoData />}
        {companiesData.map((company) => (
          <Company
            key={company.id}
            title={company.name}
            description={company.description}
            location={company.location}
            logo={company.logo}
            link={company.website}
            email={company.email}
            phone={company.phone}
            whatsApp={company.whatsApp}
          />
        ))}
      </div>
    </Container>
  );
}
