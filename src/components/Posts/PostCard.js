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
import { server } from "../../Data/APIs.js";
import { useNavigate } from "react-router-dom";

export default function PostCard({
  id,
  img,
  name,
  type,
  date,
  content,
  phoneNumber,
  media,
}) {
  const PublishedDate = useTime(date);
  const navigate = useNavigate();
  const deletePost = () => {
    Swal.fire({
      title: "هل انت متأكد من حذف هذا المنشور نهائيا ؟",
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        axios
          .delete(server.DeletePost + id)
          .then(() => {
            toast.success("تم حذف المنشور بنجاح");
            setTimeout(() => {
              navigate(0);
            }, 2500);
          })
          .catch((err) => {
            toast.error("حدث خطأ اثناء حذف المنشور");
            console.log(err);
          });
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
          <div className="post-owner-type">{type ? type : "user"}</div>
        </div>
        <div className="post-date">{PublishedDate}</div>
      </div>
      <div className="post-content">
        <p>{content}</p>
        {media && (
          <div className="img-holder d-flex justify-content-center">
            <img src={server.getIp + media} alt="" />
          </div>
        )}
      </div>
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
