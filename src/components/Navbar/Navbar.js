import React from "react";
import "./Navbar.scss";
import logo from "../../poland.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Polish flag" />
      <h3>Most charming Polish cities</h3>
    </nav>
  );
}
