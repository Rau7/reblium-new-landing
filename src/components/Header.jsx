import React from "react";
import reblogo from "../images/reblogo.png";
function Header() {
  return (
    <>
      <header>
        <div className="menu-area">
          <a href="#">
            <i className="fa-solid fa-bars menu-icon" />
          </a>
        </div>
        <div className="reblium-logo">
          <a href="/">
            <img src={reblogo} alt="reblium-logo" />
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
