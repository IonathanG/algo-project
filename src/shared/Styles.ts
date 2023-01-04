import styled from "styled-components";

export const SectionPage = styled.section`
  min-height: 100vh;
  width: 100vw;

  background-color: ${({ theme }) => theme.background_MainSection};
  color: ${({ theme }) => theme.color_Font_Main};
  font-family: "Plus Jakarta Sans", sans-serif;
  transition: 0.3s ease;
`;

export const SectionMain = styled.section`
  // margin for Top Header height
  margin-left: 286px;

  /* width: 100%; */
  /* background-color: ${({ theme }) => theme.background_MainSection}; */
  transition: 0.3s ease;
`;

export const SectionContent = styled.section`
  min-height: 100vh;
  margin-top: 80px;

  // margin for side Navbar
  /* margin-left: 286px; */
  padding: 37px 32px;
  transition: 0.3s ease;
  /* background-color: bisque; */
`;
