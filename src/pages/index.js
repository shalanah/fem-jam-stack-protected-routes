import React from "react";
import { Link } from "gatsby";

export default () => {
  return (
    <>
      <h1>This App Rules!</h1>
      <p>Log in to find out why!</p>
      <Link to="/dashboard">Go to the dashboard</Link>
    </>
  );
};
