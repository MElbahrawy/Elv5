import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import CrudBtns from "./CrudBtns";
import axios from "axios";
import { companies } from "../../Data/companies";

export default function UsersCrud() {
  const [companiesData, setCompanies] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/companies")
      .then((respose) => {
        setCompanies(respose.data);
      })
      .catch(() => setCompanies(companies));
  }, [companiesData]);
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
            <td>{company.phone}</td>
            <td>
              {" "}
              <CrudBtns Id={company.id} type="companies" />{" "}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
