import React from "react";
import Table from "react-bootstrap/Table";
import CrudBtns from "./CrudBtns";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { server } from "../../Data/APIs.js";

export default function UsersCrud({ usersData }) {
  const accType = ["admin", "owner", "technician", "user"];

  // handle updating data
  const handleType = (userId, newType) => {
    let updatedData = {
      userId: userId,
      role: newType,
    };
    axios
      .post(server.updateRole, updatedData)
      .then((response) => console.log(response))
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
            <td>{user.accountID}</td>
            <td>{user.accountFName}</td>
            <td>{user.accountLName}</td>
            <td>{user.accountAddress}</td>
            <td>{user.phoneNumber}</td>
            <td>
              <Form.Select
                aria-label="Default select example"
                defaultValue={user.accountType}
                id={user.accountID}
                onChange={(e) => handleType(user.accountID, e.target.value)}
              >
                {accType.map((type, index) => (
                  <option value={type} key={index}>
                    {type}
                  </option>
                ))}
              </Form.Select>
            </td>
            <td>
              <CrudBtns Id={user.accountID} type="users" />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
