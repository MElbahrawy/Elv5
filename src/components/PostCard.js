import React from "react";
import "./PostCard.css";
import PhoneBtn from "./PhoneBtn.js";
import WhatsappBtn from "./WhatsappBtn.js";

export default function PostCard(props) {
  const { img, name, type, date, content, phoneNumber } = props;
  return (
    <div className="post-card">
      <div className="post-header">
        <div className="post-info">
          <div className="avatar-holder">
            <img
              src={
                img
                  ? img
                  : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
              }
              alt="avatar"
            />
          </div>
          <div className="post-owner-name">{name}</div>
          <div className="post-owner-type">{type}</div>
        </div>
        <div className="post-date">{date}</div>
      </div>
      <div className="post-content">{content}</div>
      <div className="post-contact">
        <PhoneBtn phone={phoneNumber} />
        <WhatsappBtn phone={phoneNumber} />
      </div>
    </div>
  );
}
