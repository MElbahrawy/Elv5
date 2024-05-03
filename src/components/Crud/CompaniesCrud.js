import React from "react";
import Table from "react-bootstrap/Table";
import CrudBtns from "./CrudBtns";

export default function UsersCrud({ companiesData }) {
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
        {companiesData.map((company) => (
          <tr key={company.id}>
            <td>{company.id}</td>
            <td>{company.title}</td>
            <td>{company.location}</td>
            <td>{company.phoneNumber}</td>
            <td>
              <CrudBtns Id={company.id} type="companies" />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
