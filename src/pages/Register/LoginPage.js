import React from "react";
import LoginForm from "../../components/Register/Login/LoginForm";
import { Link } from "react-router-dom";

export default function Login() {
  return <>
  <LoginForm />
  <Link to="/admin/users" className="text-center d-block" >login as admin</Link>
  <Link to="/user" className="text-center d-block mb-2" >login as user</Link>
  </>;
}
