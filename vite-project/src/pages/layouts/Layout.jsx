import React from "react";
import Menu from "../../web_assets/Menu";

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
    </div>
  );
};

export default Layout;
