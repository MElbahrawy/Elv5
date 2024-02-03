import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { user } from "../../Data/user";
import { Link } from "react-router-dom";
export default function NavbarDropdown() {
  return (
    <Dropdown id="dropdown">
      <Dropdown.Toggle>
        <i class="fa-solid fa-circle-user"></i>{" "}
        <p className="d-inline-block my-0 mx-2">مرحبا، {user.firstName}</p>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
          <Link to={"user"}>تعديل بياناتي</Link>
        </Dropdown.Item>
        {user.type === "admin" ? (
          <Dropdown.Item>
            <Link to={"admin/users"}>مركز التحكم</Link>
          </Dropdown.Item>
        ) : null}
        <Dropdown.Divider />
        <Dropdown.Item>تسجيل خروج</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
