import React from "react";
import "./Menu.css";

const Menu = ({ header, items }: any) => {
  return (
    <div className="menu">
      <div className="blur" />
      <div className="menu__content">
        <div className="menu__header">{header}</div>
        <ul>
          {items.map(({ item }: any) => (
            <li>
              <a href={item.href}>{item.value}</a>
              <span className="material-symbols-outlined">{item.icon}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
