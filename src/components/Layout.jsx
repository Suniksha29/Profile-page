import React from "react";
import Sidebar from "./sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-white min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
