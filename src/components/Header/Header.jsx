import React from "react";
import HeaderTop from "./HeaderTop";
import NavigationBar from "./NavigationBar";

function Header() {
  return (
    <header id="header">
      <HeaderTop />
      <div className="wpo-site-header">
        <NavigationBar/>
      </div>
    </header>
  );
}

export default Header;
