import React from "react";
import Table from "react-bootstrap/Table";
import CrudBtns from "./CrudBtns";
import Form from "react-bootstrap/Form";
import { users } from "../../Data/users";

export default function UsersCrud() {
  const accType = ["admin", "owner", "technician", "user"];
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
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.address}</td>
            <td>{user.phoneNumber}</td>
            <td>
              <Form.Select aria-label="Default select example">
                {accType.map((type) => (
                  <option
                    selected={type === user.type ? "selected" : ""}
                    value={type}
                  >
                    {type}
                  </option>
                ))}
              </Form.Select>
            </td>
            <td>
              <CrudBtns />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
