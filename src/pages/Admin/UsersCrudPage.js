import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../../components/Utilities/LoadingSpinner.js";
import { server } from "../../Data/APIs.js";
import { users } from "../../Data/users";
import { Col, Container, Row } from "react-bootstrap";
import UsersCrud from "../../components/Crud/UsersCrud";
import CrudCat from "../../components/Crud/CrudCat";
import AddNewBtn from "../../components/Crud/AddNewBtn";
import NoData from "../../components/Utilities/NoData.js";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [usersData, setUsers] = useState([]);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    axios
      .get(server.getAllUsers)
      .then((response) => {
        setLoading(false);
        Array.isArray(response.data) &&
          response.data.length === 0 &&
          setEmpty(true);
        setUsers(response.data);
      })
      .catch(() => {
        setLoading(false);
        setUsers(users);
        // setEmpty(true);
      });
  }, []);
  return (
    <Container className="my-4 align-items-end d-flex flex-column">
      {!loading && !empty && <AddNewBtn type="user" />}
      <Row className="w-100">
        <Col md="2">
          <CrudCat />
        </Col>
        <Col md="10">
          {loading && <LoadingSpinner />}
          {empty && <NoData />}
          {!loading && !empty && <UsersCrud usersData={usersData} />}
        </Col>
      </Row>
    </Container>
  );
}
