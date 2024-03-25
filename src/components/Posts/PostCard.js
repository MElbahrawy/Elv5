import React from "react";
import "./PostCard.css";
import PhoneBtn from "../Utilities/PhoneBtn.js";
import WhatsappBtn from "../Utilities/WhatsappBtn.js";
import useTime from "../../Hooks/useTime.js";
import Avatar from "../../img/Avatar.webp";
import { Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

export default function PostCard({
  id,
  img,
  name,
  type,
  date,
  content,
  phoneNumber,
}) {
  const PublishedDate = useTime(date);
  const deletePost = () => {
    Swal.fire({
      title: "هل انت متأكد من حذف هذا المنشور نهائيا ؟",
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        axios
          .delete(`http://localhost:4000/posts/${id}`)
          .then(() => toast.success("تم حذف المنشور بنجاح"))
          .catch(() => toast.error("حدث خطأ اثناء حذف المنشور"));
      }
    });
  };
  return (
    <div className="post-card">
      <div className="post-header">
        <div className="post-info">
          <div className="avatar-holder">
            <img src={img ? img : Avatar} alt="avatar" />
          </div>
          <div className="post-owner-name">{name}</div>
          <div className="post-owner-type">{type}</div>
        </div>
        <div className="post-date">{PublishedDate}</div>
      </div>
      <div className="post-content">{content}</div>
      <div
        className="post-contact align-items-baseline"
        style={{
          justifyContent:
            phoneNumber === localStorage.phoneNumber
              ? "space-between"
              : "flex-end",
        }}
      >
        {phoneNumber === localStorage.phoneNumber ? (
          <Button
            variant="danger"
            className="delete p-1 border-white"
            onClick={() => deletePost()}
          >
            <i className="fa-solid fa-trash-can mx-1"></i>
          </Button>
        ) : null}
        <div className="d-flex gap-2">
          <PhoneBtn phone={phoneNumber} />
          <WhatsappBtn phone={phoneNumber} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
