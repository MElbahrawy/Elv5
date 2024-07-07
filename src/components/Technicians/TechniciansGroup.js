import React, { useEffect, useState } from "react";
import Technician from "./Technician.js";
import { users } from "../../Data/users";
import { Row } from "react-bootstrap";
import axios from "axios";
import { server } from "../../Data/APIs.js";
import LoadingSpinner from "../Utilities/LoadingSpinner.js";
import NoData from "../Utilities/NoData.js";

export default function TechniciansGroup() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [empty, setEmpty] = useState(false);
  useEffect(() => {
    axios
      .get(server.technicianUsers)
      .then((Response) => {
        console.log(Response);
        Array.isArray(Response.data) &&
          Response.data.length === 0 &&
          setEmpty(true);
        return Response.data;
      })
      .then((data) => {
        setLoading(false);
        setUsersData(data);
      })
      .catch((err) => {
        setLoading(false);
        setEmpty(true);
        // setUsersData(users);
      });
  }, []);
  return (
    <Row className="technicians my-5 gap-5 mx-3 justify-content-around align-items-start">
      {loading && <LoadingSpinner />}
      {empty && <NoData />}
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
