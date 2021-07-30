import React, { useEffect, useState } from "react";
import "./nav.css";

import { Link } from "react-router-dom";
export default function Navbar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
  }, []);
  return (
    <div className={`${show ? "nav nav_black" : "nav"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
        className="nav_logo"
      />
      <Link to="/signin">
        <img
          className="nav_avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt=""
        />
      </Link>
    </div>
  );
}
