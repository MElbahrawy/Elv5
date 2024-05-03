import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../../components/Utilities/LoadingSpinner.js";
import { server } from "../../Data/APIs.js";
import { users } from "../../Data/users";
import { Col, Container, Row } from "react-bootstrap";
import UsersCrud from "../../components/Crud/UsersCrud";
import CrudCat from "../../components/Crud/CrudCat";
import AddNewBtn from "../../components/Crud/AddNewBtn";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [usersData, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(server.getAllUsers)
      .then((response) => {
        setLoading(false);
        setUsers(response.data);
      })
      .catch(() => {
        setLoading(false);
        setUsers(users);
      });
  }, []);
  return (
    <Container className="my-4 align-items-end d-flex flex-column">
      {!loading && <AddNewBtn type="user" />}
      <Row className="w-100">
        <Col md="2">
          <CrudCat />
        </Col>
        <Col md="10">
          {loading ? <LoadingSpinner /> : <UsersCrud usersData={usersData} />}
        </Col>
      </Row>
    </Container>
  );
}
