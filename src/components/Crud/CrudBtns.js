import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import ShowInfoCrud from "./ShowInfoCrud";
import { user } from "../../Data/user";

export default function CrudBtns({ Id, type }) {
  const [modalShow, setModalShow] = useState(false);
  const [userData, setUserData] = useState({});
  //   Show
  const showElement = () => {
    console.log(type);
    axios
      .get(
        type === "users"
          ? `http://localhost:4000/users/${Id}`
          : `http://localhost:4000/companies/${Id}`
      )
      .then((res) => res.data)
      .then((data) => setUserData(data))
      .catch(() => setUserData(user));
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
          .delete(`http://localhost:4000/${type}/${id}`)
          .then((res) => {
            console.log(res);
          })
          .catch(() => alert("user not Found"));
      }
    });
  };
  return (
    <div className="d-flex gap-3">
      <Button variant="success" onClick={() => showElement()}>
        {" "}
        عرض{" "}
      </Button>
      <ShowInfoCrud
        show={modalShow}
        user={userData}
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
        </Link>{" "}
      </Button>
      <Button
        variant="danger"
        onClick={() => {
          deleteElement(Id);
        }}
      >
        {" "}
        حذف
      </Button>
    </div>
  );
}
