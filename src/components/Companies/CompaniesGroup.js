import { companies } from "../../Data/companies";
import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Company from "./Company";
import axios from "axios";
import { server } from "../../Data/APIs";
import LoadingSpinner from "../Utilities/LoadingSpinner";

export default function CompaniesGroup() {
  const [companiesData, setCompaniesData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://154.237.205.10:5109/api/Company/GetAll")
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then((data) => {
        setLoading(false);
        setCompaniesData(data);
      })
      .catch(() => {
        setLoading(false);
        //   setCompaniesData(companies);
      });
  }, []);

  return (
    <Container>
      <div className="d-flex flex-column justify-content-center align-items-center gap-4 my-5">
        {loading && <LoadingSpinner />}
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
