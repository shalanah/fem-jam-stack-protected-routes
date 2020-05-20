import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Link to="/">Jamstack App</Link>
        <main>{children}</main>
      </header>
    </>
  );
};

export default Layout;
