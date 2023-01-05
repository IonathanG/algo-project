import styled from "styled-components";
import MainMenu from "./_MainMenu";
import MoreInfo from "./_MoreInfo";
import Preferences from "./_Preferences";

const MenuContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 51px;
  margin-top: 50px;

  h2 {
    margin: 0px 0px 10px 16px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.color_Font_SubMenu};
  }
`;

const NavigationMenu = () => {
  return (
    <MenuContainer>
      <MainMenu />
      <MoreInfo />
      <Preferences />
    </MenuContainer>
  );
};

export default NavigationMenu;
