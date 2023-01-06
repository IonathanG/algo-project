import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    // Theme Name Reference
    theme_Name: string;

    // Main Section
    background_MainSection: string;
    background_Secondary: string;
    boxShadow_Main: string;

    // Font Color
    color_Font_Main: string;
    color_Font_Secondary: string;
    color_Font_Tertiary: string;
    color_Font_SubMenu: string;
    color_CTA: string;

    // Border
    color_Border: string;

    // Pop Up
    background_PopUp: string;
  }
}
