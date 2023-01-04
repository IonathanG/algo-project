import React from "react";
import styled from "styled-components";
import NavbarHeader from "./_NavbarHeader";
import NavigationMenu from "./_NavigationMenu";

const NavbarContainer = styled.nav`
  width: 286px;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: ${({ theme }) => theme.background_Secondary};
  border-right: 1px solid ${({ theme }) => theme.boxShadow_Main};
  /* border-right: 1px solid black; */
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarHeader />
      <NavigationMenu />
    </NavbarContainer>
  );
};

export default Navbar;
