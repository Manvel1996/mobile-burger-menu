import React, { useState } from "react";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import "./Navbar.css";

export default function Navbar() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const items = [
    { value: "Home", href: "/home", icon: "home-page.png" },
    { value: "About", href: "/about", icon: "info.png" },
  ];

  return (
    <nav>
      <div
        className={
          activeMobileMenu ? "mobileMenu closeMobileMenu" : "mobileMenu"
        }
        onClick={() => setActiveMobileMenu(!activeMobileMenu)}>
        <span />
      </div>
      <BurgerMenu
        items={items}
        menuHeader="Burger Menu"
        activeMobileMenu={activeMobileMenu}
        setActiveMobileMenu={setActiveMobileMenu}
      />
    </nav>
  );
}
