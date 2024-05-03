import React, { useEffect, useState } from "react";
import Technician from "./Technician.js";
import { users } from "../../Data/users";
import { Row } from "react-bootstrap";
import axios from "axios";
import { server } from "../../Data/APIs.js";
import LoadingSpinner from "../Utilities/LoadingSpinner.js";

export default function TechniciansGroup() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(server.technicianUsers)
      .then((Response) => {
        console.log(Response);
        return Response.data;
      })
      .then((data) => {
        setLoading(false);
        setUsersData(data);
      })
      .catch((err) => setLoading(false));
  }, []);
  return (
    <Row className="technicians my-5 gap-5 mx-3 justify-content-around align-items-start">
      {loading && <LoadingSpinner />}
      {usersData.map((tech) => (
        <Technician
          key={tech.id}
          name={tech.firstName + " " + tech.lastName}
          address={tech.address}
        />
      ))}
    </Row>
  );
}
