import { server } from "../../Data/APIs.js";
import ShowInfoCrud from "./ShowInfoCrud";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { user } from "../../Data/user";
import { companies } from "../../Data/companies";
import Swal from "sweetalert2";
import axios from "axios";

export default function CrudBtns({ Id, type }) {
  const [modalShow, setModalShow] = useState(false);
  const [fullData, setFullData] = useState({});
  //   Show
  const showElement = () => {
    axios
      .get(
        type === "users"
          ? server.GetByUserId + Id
          : `http://localhost:4000/companies/${Id}`
      )
      .then((res) => res.data)
      .then((data) => setFullData(data))
      .catch(() =>
        type === "users" ? setFullData(user) : setFullData(companies[0])
      );
    setModalShow(true);
  };
  //   Delete
  const deleteElement = (id) => {
    Swal.fire({
      title: "هل انت متأكد من حذف هذا العنصر نهائيا ؟",
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        axios
          .delete(server.DeleteUser, Id)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }
    });
  };
  return (
    <div className="d-flex gap-3">
      <Button variant="success" onClick={() => showElement()}>
        عرض
      </Button>
      <ShowInfoCrud
        show={modalShow}
        user={fullData}
        type={type}
        onHide={() => setModalShow(false)}
      />
      <Button variant="warning">
        <Link
          to={type === "users" ? `${Id}` : `/admin/companies/${Id}`}
          style={{ color: "black" }}
          id={Id}
        >
          تعديل
        </Link>
      </Button>
      <Button
        variant="danger"
        onClick={() => {
          deleteElement(Id);
        }}
      >
        حذف
      </Button>
    </div>
  );
}
