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

const ThemeContainer = styled.div`
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-left: 8px;
  width: 68px;
  height: 34px;
  border-radius: 25px;
  background: #f6f7f9;

  img:nth-child(1) {
    width: 18px;
    height: 18px;
  }
  img:nth-child(2) {
    width: 14px;
    height: 14px;
  }
`;

interface IMenuItem {
  label: string;
  slug: string;
  link: string;
}

const Preferences: React.FC = () => {
  const menu: IMenuItem[] = [
    { label: "Settings", slug: "setting", link: "/" },
    { label: "Help & Center", slug: "info-circle", link: "/" },
    { label: "Dark Mode", slug: "briefcase", link: "/" },
  ];

  const pickIcon = (slug: string) => {
    switch (slug) {
      case "setting":
        return IconName.setting;
      case "info-circle":
        return IconName.infoCircle;
      case "briefcase":
        return IconName.briefcase;
      default:
        return IconName.setting;
    }
  };

  return (
    <li>
      <h2>Preferences</h2>
      <MenuContainer>
        {menu.map((item) => (
          <MenuItem key={item.slug}>
            <NavLink to={`${item.link}`} style={{ textDecoration: "none" }}>
              <Icon name={pickIcon(item.slug)} />
              <span>{item.label}</span>
              {item.slug === "briefcase" ? (
                <ThemeContainer>
                  <img
                    onClick={() => console.log("light")}
                    src="/assets/Icon/light.svg"
                    alt="light-icon"
                  />
                  <img
                    onClick={() => console.log("dark")}
                    src="/assets/Icon/dark.svg"
                    alt="dark-icon"
                  />
                </ThemeContainer>
              ) : null}
            </NavLink>
          </MenuItem>
        ))}
      </MenuContainer>
    </li>
  );
};

export default Preferences;
