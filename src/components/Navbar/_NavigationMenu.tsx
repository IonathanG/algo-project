import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MenuContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const MenuItem = styled.li`
  cursor: pointer;
`;

const LinkContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  gap: 20px;

  height: 49px;
  color: ${({ theme }) => theme.color_NavItem};
  transition: 0.4s ease;

  border-left: ${(props) =>
    props.selected && `5px solid ${props.theme.color_Cyan}`};

  &:hover {
    background-color: ${({ theme }) => theme.background_active_NavItem};
  }

  &.active {
    background-color: ${({ theme }) => theme.background_active_NavItem};
    border-left: 5px solid ${({ theme }) => theme.color_Cyan};
  }
`;

const Icon = styled.svg`
  width: 16px;
  height: 16px;

  display: grid;
  place-items: center;

  opacity: 0.8;
  color: ${({ theme }) => theme.color_Cyan};
`;

const Name = styled.span`
  font-size: 15px;
`;

const NavigationMenu = () => {
  const MenuNav = [];

  return (
    <MenuContainer>
      {MenuNav.map((item) => (
        <MenuItem key={item.id}>
          {/* Simple Navigation Links */}
          {item.link && (
            <LinkContainer to={`${item.link}`}>
              <Icon as={item.src} />
              <Name>{item.name}</Name>
            </LinkContainer>
          )}
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default NavigationMenu;
