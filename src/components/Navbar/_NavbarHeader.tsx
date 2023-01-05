import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  span {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 150%;

    text-align: justify;
    letter-spacing: -0.02em;

    color: ${({ theme }) => theme.color_Font_Tertiary};
  }
`;

const Logo = styled.img`
  width: 62px;
  height: 62px;
`;

const NavbarHeader = () => {
  return (
    <Header>
      <Logo src="/assets/Image/Logo/Logo.png" alt="logo" />
      <span>filerrrr.</span>
    </Header>
  );
};

export default NavbarHeader;
