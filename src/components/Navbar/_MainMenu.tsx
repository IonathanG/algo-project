import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Icon from "../Icon";
import IconName from "../Icon/model";

const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MenuItem = styled.li`
  cursor: pointer;
  position: relative;
  padding: 14px 17px;
  font-weight: 500;
  font-size: 18px;

  a {
    display: flex;
    align-items: center;
    gap: 15px;

    img {
      z-index: 10;
    }
  }

  span {
    color: ${({ theme }) => theme.color_Font_Main} !important;
    z-index: 10 !important;
    position: relative;
    transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  &::after {
    content: "";
    background-color: ${({ theme }) => theme.color_CTA};
    border-radius: 10px;
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  &:hover {
    &::after {
      width: 100%;
    }

    img {
      filter: brightness(300%);
    }

    span {
      font-weight: 600;
      color: ${({ theme }) => theme.background_Secondary} !important;
    }
  }
`;

interface IMenuItem {
  label: string;
  slug: string;
  link: string;
}

const MainMenu: React.FC = () => {
  const menu: IMenuItem[] = [
    { label: "File manager", slug: "document-text", link: "/" },
    { label: "Project", slug: "plugins", link: "/" },
    { label: "People & Teams", slug: "message", link: "/" },
  ];

  const pickIcon = (slug: string) => {
    switch (slug) {
      case "document-text":
        return IconName.documentText;
      case "plugins":
        return IconName.plugins;
      case "message":
        return IconName.message;
      default:
        return IconName.plugins;
    }
  };

  return (
    <li>
      <h2>Main Menu</h2>
      <MenuContainer>
        {menu.map((item) => (
          <MenuItem key={item.slug}>
            <NavLink to={`${item.link}`} style={{ textDecoration: "none" }}>
              <Icon name={pickIcon(item.slug)} />
              <span>{item.label}</span>
            </NavLink>
          </MenuItem>
        ))}
      </MenuContainer>
    </li>
  );
};

export default MainMenu;
