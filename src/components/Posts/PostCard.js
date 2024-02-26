import React from "react";
import "./PostCard.css";
import PhoneBtn from "../Utilities/PhoneBtn.js";
import WhatsappBtn from "../Utilities/WhatsappBtn.js";
import useTime from "../../Hooks/useTime.js";
import Avatar from "../../img/Avatar.webp";

export default function PostCard({
  img,
  name,
  type,
  date,
  content,
  phoneNumber,
}) {
  const PublishedDate = useTime(date);
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
      <div className="post-contact">
        <PhoneBtn phone={phoneNumber} />
        <WhatsappBtn phone={phoneNumber} />
      </div>
    </div>
  );
}
