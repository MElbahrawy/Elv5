import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <div className="head">
            <div className="container">
                <div className="navs">
                    <a href="/">الرئيسية</a>
                    <a href="/">تواصل معنا</a>
                    <a href="/">عن الشركة</a>
                </div>
            </div>
        </div>
    );
}
