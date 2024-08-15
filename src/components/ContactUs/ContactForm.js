import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import React, { useState } from "react";

export default function ContactForm() {
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [check, setCheck] = useState(false);

  function SendEmail() {
    (function () {
      emailjs.init("lhLR1wR7UknVVm8ju");
    })();

    let templateParams = {
      reply_to: email,
      message: message,
    };

    emailjs.send("service_n7ticw2", "template_34gdr0a", templateParams).then(
      function (response) {
        toast.success("تم إرسال رسالتك بنجاح");
      },
      function (error) {
        toast.error("حدث خطأ في الارسال ، حاول مره اخري");
      }
    );
  }
  const HandleClick = () => {
    setCheck(true);
    SendEmail();
    setCheck(false);
  };
  return (
    <div className="bg-light d-flex align-items-center p-3 flex-column">
      <h2 className="my-5">تريد التواصل معنا ؟</h2>
      <Form className="w-100">
        <Form.Group className="mb-3">
          <Form.Label>ادخل بريدك الالكتروني</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={(e) => setemail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>اكتب لنا</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="اكتب هنا ..."
            onChange={(e) => setmessage(e.target.value)}
            required
          />
        </Form.Group>
        <Button
          className="bg-main"
          onClick={() => HandleClick()}
          disabled={check}
        >
          أرسل
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
}
