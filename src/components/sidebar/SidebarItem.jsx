import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ title, icon, link }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `flex items-center gap-4 px-4 py-3 rounded-lg cursor-pointer transition 
        ${isActive ? "bg-blue-800" : "hover:bg-blue-700"}`
      }
    >
      {icon}
      <span className="text-lg">{title}</span>
    </NavLink>
  );
};

export default SidebarItem;
