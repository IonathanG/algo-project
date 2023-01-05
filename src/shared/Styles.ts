import styled from "styled-components";

export const SectionPage = styled.section`
  /* height: 100vh;
  width: 100vw; */

  background-color: ${({ theme }) => theme.background_MainSection};
  color: ${({ theme }) => theme.color_Font_Main};
  font-family: "Plus Jakarta Sans", sans-serif;
  transition: 0.3s ease;
`;

export const SectionMain = styled.section`
  // margin for Top Header height + Navbar
  margin-top: 80px;
  margin-left: 286px;

  padding: 37px 32px;
  transition: 0.3s ease;
  display: flex;
`;
