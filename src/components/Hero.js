import React from "react";
import "./Hero.css";

export default function Heading() {
    return (
        <section id="hero-section">
            <div className="img-holder">
                <img
                    src="https://wallpapercave.com/wp/wp2303648.jpg"
                    alt="home_elevator"
                />
            </div>
            <div className="hero-heading">
                <h1>Elv5</h1>
                <p>طريقك الي جيل جديد من المصاعد الذكية</p>
                <a href="/" className="google-play">
                    <img
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        alt="Get it on Google play"
                    />
                </a>
            </div>
        </section>
    );
}
