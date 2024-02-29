import React, { useState } from "react";
import "./AddPost.css";
import axios from "axios";
import Avatar from "../../img/Avatar.webp";

export default function AddPost({ postsData, setPostsData }) {
  const [value, setValue] = useState({
    id: "",
    img: "",
    name: localStorage.firstName + " " + localStorage.lastName,
    type: localStorage.type,
    date: "",
    content: "",
    phoneNumber: localStorage.phoneNumber,
  });
  const handleChange = (e) => {
    setValue({
      ...value,
      content: e.target.value,
    });
  };
  const handleSubmit = () => {
    setValue((prevValue) => {
      const updatedValue = {
        ...prevValue,
        id: String(postsData.length + 10),
        date: new Date(),
      };
      setPostsData([...postsData, updatedValue]);
      axios.post("http://localhost:4000/posts", updatedValue);
      return updatedValue;
    });
  };
  return (
    <div>
      <button
        type="button"
        className="btn addPostBtn position-fixed"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        +
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog add-post">
          <div className="modal-content">
            <div className="modal-header justify-content-start position-relative">
              <div className="avatar-holder">
                <img src={Avatar} alt="avatar" />
              </div>
              <h1 className="modal-title fs-5 me-2" id="exampleModalLabel">
                أضافة منشور
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="post-text form-control"
                placeholder="اعرض مشكلتك"
                onChange={handleChange}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                تجاهل
              </button>
              <button
                type="button"
                className="btn post-btn"
                onClick={handleSubmit}
                data-bs-dismiss="modal"
              >
                أنشر
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
