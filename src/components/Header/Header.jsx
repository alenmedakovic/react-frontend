import React from "react";
import "./header.css";
import headerImage from "../../photos/headerImage.png"

function Header() {
  return (
    <header>
      <img src={headerImage} alt="Header" />
      <div className="header-text">
      </div>
    </header>
  );
}

export default Header;
