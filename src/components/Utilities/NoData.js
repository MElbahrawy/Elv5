import React from "react";
import { Container } from "react-bootstrap";

export default function NoData() {
  return (
    <div className="m-1">
      <Container>
        <h3 className="text-center py-4 w-100">
          لا يوجد بيانات لعرضها، يرجي المحاولة مره اخري
        </h3>
      </Container>
    </div>
  );
}
