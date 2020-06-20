import React from "react";
import { Link } from "gatsby";
import { IdentityContextProvider } from "react-netlify-identity-widget";

const Layout = ({ children }) => {
  return (
    <IdentityContextProvider
      url={"https://jamstack-intro-auth-shalanah.netlify.com"}
    >
      <header>
        <Link to="/">Jamstack App</Link>
        <main>{children}</main>
      </header>
    </IdentityContextProvider>
  );
};

export default Layout;
