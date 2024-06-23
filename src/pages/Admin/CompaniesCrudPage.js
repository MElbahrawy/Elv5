import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../../components/Utilities/LoadingSpinner.js";
import { server } from "../../Data/APIs.js";
import { companies } from "../../Data/companies";
import { Col, Container, Row } from "react-bootstrap";
import CompaniesCrud from "../../components/Crud/CompaniesCrud";
import CrudCat from "../../components/Crud/CrudCat";
import AddNewBtn from "../../components/Crud/AddNewBtn";
import NoData from "../../components/Utilities/NoData.js";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [companiesData, setCompanies] = useState([]);
  const [empty, setEmpty] = useState(false);
  useEffect(() => {
    axios
      .get(server.GetAllCompany)
      .then((response) => {
        console.log(response);
        setLoading(false);
        setCompanies(response.data);
      })
      .catch(() => {
        setLoading(false);
        // setCompanies(companies);
        setEmpty(true);
      });
  }, []);
  return (
    <Container className="my-4 align-items-end d-flex flex-column">
      {!loading && !empty && <AddNewBtn type="company" />}
      <Row className="w-100">
        <Col sm="2">
          <CrudCat />
        </Col>
        <Col sm="10">
          {loading && <LoadingSpinner />}
          {empty && <NoData />}
          {!loading && !empty && (
            <CompaniesCrud companiesData={companiesData} />
          )}
        </Col>
      </Row>
    </Container>
  );
}
