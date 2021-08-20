import React from "react";
import "./Hero.css";

const Hero = ({ handleLogout }) => {
  var img = document.createElement("img");
  img.src =
    "https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png";
  return (
    <section className="hero">
      <nav>
        <h2>M-GYM</h2>
        <h2>We are Gald to see you here!</h2>
        <button onClick={handleLogout}> LogOut </button>
      </nav>
    </section>
  );
};

export default Hero;
