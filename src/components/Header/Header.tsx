import React from "react";
import styled from "styled-components";
import Input from "./_InputSearch";
import User from "./_User";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 286px;

  width: 100%;
  height: 80px;
  padding: 0px 32px;

  display: flex;
  align-items: center;
  /* justify-content: space-between; */

  background-color: ${({ theme }) => theme.background_Container};
  /* border-bottom: 1px solid ${({ theme }) => theme.boxShadow_Navbar}; */
  transition: 0.3s ease;
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: bisque;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Left>
        <Input />
      </Left>

      <Right>
        <User />
      </Right>
    </HeaderContainer>
  );
};

export default Header;
