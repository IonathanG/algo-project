import styled from "styled-components";
import NavbarHeader from "./_NavbarHeader";
import NavigationMenu from "./_NavigationMenu";
import Credits from "./_Credits";

const NavbarContainer = styled.nav`
  width: 286px;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  padding: 18px 16px 32px 16px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;

  background-color: ${({ theme }) => theme.background_Secondary};
  border-right: 1px solid ${({ theme }) => theme.boxShadow_Main};
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarHeader />
      <NavigationMenu />
      <Credits />
    </NavbarContainer>
  );
};

export default Navbar;
