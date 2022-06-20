import React from "react";
import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header page__section">
      <img className="header__logo" src={logo} alt="Логотип Mesto" />
    </header>
  );
}

export default Header;
