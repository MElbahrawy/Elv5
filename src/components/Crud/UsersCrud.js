import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import CrudBtns from "./CrudBtns";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { server } from "../../Data/APIs.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UsersCrud({ usersData }) {
  const accType = ["admin", "owner", "technician", "user"];
  const [check, setCheck] = useState(false);

  // handle updating data
  const handleType = (userId, newType) => {
    setCheck(true);
    let updatedData = {
      userId: userId,
      role: newType,
    };
    axios
      .post(server.updateRole, updatedData)
      .then((response) => toast.success("تم التعديل بنجاح"))
      .catch((err) =>
        toast.error("حدث خطأ اثناء العملية. يرجي المحاولة مرة اخري")
      )
      .finally(() => setCheck(false));
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
          <tr key={user.accountID}>
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
                disabled={check}
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
      <ToastContainer />
    </Table>
  );
}
