import React, { useEffect, useState } from "react";
import Technician from "./Technician.js";
import { users } from "../../Data/users";
import { Row } from "react-bootstrap";
import axios from "axios";
import { server } from "../../Data/APIs.js";

export default function TechniciansGroup() {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    // axios
    //   .get("http://localhost:4000/users")
    //   .then((response) => response.data)
    //   .then((data) => data.filter((user) => user.type === "technician"))
    //   .then((technicians) => setUsersData(technicians))
    //   .catch(() =>
    //     setUsersData(users.filter((user) => user.type === "technician"))
    //   );
    axios
      .get(server.technicianUsers)
      .then((Response) => {
        console.log(Response);
        return Response.data;
      })
      .then((data) => setUsersData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Row className="technicians my-5 gap-5 mx-3 justify-content-around align-items-start">
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
