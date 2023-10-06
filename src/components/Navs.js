import React, { useState } from "react";
import "./Navs.css";
export default function Navs() {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
        <nav className="navbar navbar-expand-md ">
            <div className="container">
                <button
                    className="btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span
                        className={isActive ? "tabs active" : "tabs"}
                        onClick={toggleClass}
                    >
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                </button>
                <div
                    className="collapse ms-auto navbar-collapse"
                    id="navbarNav"
                >
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                الرئيسية
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                المنتجات
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">
                                الفنيين
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
