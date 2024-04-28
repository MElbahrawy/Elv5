import WhatsappBtn from "../Utilities/WhatsappBtn";
import PhoneBtn from "../Utilities/PhoneBtn";
import React from "react";

export default function ContactImg() {
  return (
    <div className="bg-main d-flex align-items-center p-2 flex-column text-light h-100  justify-content-center overflow-hidden">
      <iframe
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.6984790623183!2d30.925236238734904!3d30.472977373957615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14587e447c6fc38b%3A0xc47ca8046df9b6d6!2sFaculty%20Of%20Electronic%20Engineering%20-%20Menofia%20University!5e0!3m2!1sen!2s!4v1706749762062!5m2!1sen!2s"
        height="300"
        className="rounded-box w-100"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <div className="d-flex gap-md-5 gap-1 m-md-3 m-2">
        <WhatsappBtn phone="01151245412" />
        <PhoneBtn phone="01151245412" />
      </div>
    </div>
  );
}
