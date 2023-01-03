import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    // Theme Name Reference
    theme_Name: string;

    // Main Section
    background_MainSection: string;
    background_Container: string;

    // Font Color
    color_Font_Main: string;
    color_Font_Light: string;

    //Top Header
    background_Header: string;

    // Input
    border_Input: string;

    // Buttons
    background_ButtonBasic: string;
    background_ButtonBasic_Hover: string;
    color_ButtonBasic: string;
    border_Button: string;

    // Side Navbar
    color_NavItem: string;
    color_active_NavItem: string;
    background_active_NavItem: string;
    color_SubNavItem: string;
    boxShadow_Navbar: string;

    // Tables
    hover_Table: string;
    color_Font_Arrow: string;

    // Card
    card_subTitle: string;

    // Pop Up
    background_PopUp: string;
  }
}
