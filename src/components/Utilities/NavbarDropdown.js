import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
export default function NavbarDropdown() {
  const [name, setName] = useState("");
  const [type, setType] = useState();
  useEffect(() => {
    setName(localStorage.getItem("firstName"));
    setType(localStorage.getItem("type"));
  }, []);
  const handleLogOut = () => {
    localStorage.clear();
          setTimeout(() => {
            navigate("/");
          }, 1000);
          axios
  };
  return (
    <Dropdown id="dropdown">
      <Dropdown.Toggle>
        <i className="fa-solid fa-circle-user"></i>
        <p className="d-inline-block my-0 mx-2">مرحبا، {name ? name : "عضو"}</p>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
          <Link to={"user"}>تعديل بياناتي</Link>
        </Dropdown.Item>
        {type === "admin" ? (
          <Dropdown.Item>
            <Link to={"admin/users"}>مركز التحكم</Link>
          </Dropdown.Item>
        ) : null}
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => handleLogOut()}>تسجيل خروج</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
