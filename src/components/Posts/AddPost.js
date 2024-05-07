import React, { useState } from "react";
import "./AddPost.css";
import axios from "axios";
import Avatar from "../../img/Avatar.webp";
import { server } from "../../Data/APIs";

export default function AddPost({ postsData, setPostsData }) {
  const [PostData, setPostData] = useState({
    // name: localStorage.firstName + " " + localStorage.lastName,
    // type: localStorage.type,
    // date: "",
    Content: "",
    UserId: localStorage.id,
    Media: "",
    // phoneNumber: localStorage.phoneNumber,
  });
  const handleChange = (e) => {
    setPostData({
      ...PostData,
      Content: e.target.value,
    });
  };

  const handleMedia = (e) => {
    setPostData({
      ...PostData,
      Media: e.target.value,
    });
  };

  const handleSubmit = () => {
    // setPostData((prevValue) => {
    //   const updatedValue = {
    //     ...prevValue,
    //     id: String(postsData.length + 10),
    //     date: new Date(),
    //   };
    //   axios
    //     .post("http://localhost:4000/posts", updatedValue)
    //     .then(() => setPostsData([...postsData, updatedValue]))
    //     .catch((err) => console.log(err));
    //   return updatedValue;
    // });
    console.log(PostData);
    axios
      .post(server.Posts, PostData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
              <input
                type="file"
                className="post-text form-control"
                placeholder=""
                onChange={handleMedia}
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
