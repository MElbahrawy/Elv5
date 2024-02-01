import React from 'react'
import Table from 'react-bootstrap/Table';
import CrudBtns from './CrudBtns';

export default function UsersCrud() {
  return (
    <Table striped bordered hover responsive >
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
        <tr>
          <td>1</td>
          <td>مؤسسة الفتح للمصاعد</td>
          <td> برج البشطمير, الشقة 1, الدور 1, دوران المجزر - الدقهلية - المنصورة</td>
          <td>01008479268</td>
          <td> <CrudBtns/> </td>
        </tr>
      </tbody>
    </Table>
  )
}
