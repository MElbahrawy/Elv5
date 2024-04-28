import React from "react";
import { Link } from "react-router-dom";

export default function CrudCat() {
  return (
    <div className="d-flex flex-column text-center gap-3 my-3">
      <Link to="/admin/users" className="bg-dark p-2 text-light">
        مستخدمين
      </Link>
      <Link to="/admin/Companies" className="bg-dark p-2 text-light">
        شركات
      </Link>
    </div>
  );
}
