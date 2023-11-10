import React from "react";
import "./AddPost.css";

export default function AddPost() {
  return (
    <div className="add-post">
      <div className="avatar-holder">
        <img
          src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
          alt="avatar"
        />
      </div>
      <input
        type="text"
        className="post-text form-control"
        placeholder="اعرض مشكلتك"
      />
      <button className="post-btn btn">أنشر</button>
    </div>
  );
}
