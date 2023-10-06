import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <div className="navbar navbar-expand-md ">
            <div className="container">
                <a className="navbar-brand text-light" href="/">
                    Elv5
                </a>

                <div className="signing">
                    <a href="/">
                        <i className="fa-solid fa-circle-user d-block"></i>دخول
                    </a>
                    <a href="/">
                        <i className="fa-solid fa-pen-to-square d-block"></i>
                        تسجيل
                    </a>
                </div>
            </div>
        </div>
    );
}
