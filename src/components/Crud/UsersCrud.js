import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import CrudBtns from "./CrudBtns";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { users } from "../../Data/users";

export default function UsersCrud() {
  // types var
  const accType = ["admin", "owner", "technician", "user"];
  // state for the users
  const [usersData, setUsers] = useState([]);
  // fetching users data
  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch(() => setUsers(users));
  }, [usersData]);
  // handle updating data
  const handleType = (userId, newType) => {
    axios
      .get(`http://localhost:4000/users/${userId}`)
      .then((response) => response.data)
      .then((data) => {
        let updatedData = data;
        updatedData.type = newType;
        axios.put(`http://localhost:4000/users/${userId}`, updatedData);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>الاسم الاول</th>
          <th>الاسم الاخير</th>
          <th>العنوان</th>
          <th>رقم الهاتف</th>
          <th>النوع</th>
          <th>تخصيص</th>
        </tr>
      </thead>
      <tbody>
        {usersData.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.address}</td>
            <td>{user.phoneNumber}</td>
            <td>
              <Form.Select
                aria-label="Default select example"
                defaultValue={user.type}
                id={user.id}
                onChange={(e) => handleType(user.id, e.target.value)}
              >
                {accType.map((type, index) => (
                  <option value={type} key={index}>
                    {type}
                  </option>
                ))}
              </Form.Select>
            </td>
            <td>
              <CrudBtns Id={user.id} type="users" />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
