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
      .catch((err) => {
        setLoading(false);
        setUsersData(users);
      });
  }, []);
  return (
    <Row className="technicians my-5 gap-5 mx-3 justify-content-around align-items-start">
      {loading && <LoadingSpinner />}
      {usersData.map((tech, index) => (
        <Technician
          key={index}
          name={tech.accountFName + " " + tech.accountLName}
          address={tech.accountAddress}
        />
      ))}
    </Row>
  );
}
