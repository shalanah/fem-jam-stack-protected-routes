import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const LinkWithActive = styled(Link)`
  &.active:active,
  &.active:visited,
  &.active:link {
    color: red !important;
  }
  display: block;
`;

const Profile = () => {
  return (
    <div>
      <nav>
        <LinkWithActive to="/dashboard/secret" activeClassName="active">
          Secret Stuff
        </LinkWithActive>
        <LinkWithActive to="/dashboard/base" activeClassName="active">
          Base
        </LinkWithActive>
      </nav>
      <span>TODO: show login status</span>
    </div>
  );
};

export default Profile;
