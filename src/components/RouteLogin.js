import React from "react";
import { useIdentityContext } from "react-netlify-identity";
import { navigate } from "gatsby";

const RouteLogin = () => {
  const identity = useIdentityContext();
  console.log(identity);
  if (identity && identity.isLoggedIn) {
    navigate("/dashboard/secret", { replace: true });
  }
  return (
    <>
      <h1>Login or Sign up</h1>
      <button>Login</button>
    </>
  );
};

export default RouteLogin;
