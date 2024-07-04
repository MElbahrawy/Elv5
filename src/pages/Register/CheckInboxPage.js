import React from "react";
import { Container } from "react-bootstrap";

export default function CheckInboxPage() {
  return (
    <div className="login-page">
      <Container>
        <div className="login-form">
          <h3>تم إرسال رسالة الي بريدك الالكتروني</h3>
          <p color="info">يرجي التحقق من صندوق الرسائل الخاص بك</p>
        </div>
      </Container>
    </div>
  );
}
