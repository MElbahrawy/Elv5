import React from "react";
import Table from "react-bootstrap/Table";
import CrudBtns from "./CrudBtns";
import Form from "react-bootstrap/Form";

export default function UsersCrud() {
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
        <tr>
          <td>1</td>
          <td>محمد</td>
          <td>علاء</td>
          <td>بنها / القليوبية / مصر</td>
          <td>01151245412</td>
          <td>
          <Form.Select aria-label="Default select example">
              <option value="user">مستخدم</option>
              <option value="admin">ادمن</option>
              <option value="owner">مالك</option>
              <option value="technician">فني</option>
            </Form.Select>
          </td>
          <td>
            
            <CrudBtns />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>حسام</td>
          <td>مصطفي</td>
          <td>اسطنها</td>
          <td>010</td>
          <td>
            <Form.Select aria-label="Default select example">
              <option value="user">مستخدم</option>
              <option value="admin">ادمن</option>
              <option value="owner">مالك</option>
              <option value="technician">فني</option>
            </Form.Select>
          </td>
          <td>
            <CrudBtns />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>حسن</td>
          <td>مدكور</td>
          <td>منوف</td>
          <td>012</td>
          <td>
          <Form.Select aria-label="Default select example">
              <option value="user">مستخدم</option>
              <option value="admin">ادمن</option>
              <option value="owner">مالك</option>
              <option value="technician">فني</option>
            </Form.Select>
          </td>
          <td>
            <CrudBtns />
          </td>
        </tr>
        <tr>
          <td>9999</td>
          <td>عبدو</td>
          <td>البلف</td>
          <td>القاهرة</td>
          <td>012</td>
          <td>اسطي</td>
          <td>
            <CrudBtns />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
