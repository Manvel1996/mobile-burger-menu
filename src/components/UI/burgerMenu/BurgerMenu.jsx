import React from "react";
import "./BurgerMenu.css";

export default function BurgerMenu({
  menuHeader,
  items,
  activeMobileMenu,
  setActiveMobileMenu,
}) {
  return (
    <div className={activeMobileMenu?"burgerMenu activeBurgerMenu":"burgerMenu"}>
      <div className="blur" onClick={()=>setActiveMobileMenu(false)}></div>
      <div className="burgerMenuContent">
        <div className="burgerMenuHeader">{menuHeader}</div>
        <ul>
          {items.map((item) => (
            <li key={item.href} onClick={()=>setActiveMobileMenu(false)}>
              <a href={item.href}>{item.value}</a>
              <img src={item.icon} alt="icon" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
