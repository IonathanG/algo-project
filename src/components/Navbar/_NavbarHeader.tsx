import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  padding: 10px 20px 5px 20px;
  font-size: 14px;
`;

// const UserAvatar = styled.img`
//   width: 45px;
//   height: auto;
// `;

const NavbarHeader = () => {
  return <Header>NavbarHeader</Header>;
};

export default NavbarHeader;
