import React from "react";
import Table from "react-bootstrap/Table";
import CrudBtns from "./CrudBtns";
import { companies } from "../../Data/companies";

export default function UsersCrud() {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>الاسم</th>
          <th>العنوان</th>
          <th>رقم الهاتف</th>
          <th>تخصيص</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company) => (
          <tr key={company.id}>
            <td>{company.id}</td>
            <td>{company.title}</td>
            <td>{company.location}</td>
            <td>{company.phone}</td>
            <td>
              {" "}
              <CrudBtns />{" "}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
