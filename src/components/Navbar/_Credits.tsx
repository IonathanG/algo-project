import styled from "styled-components";

const Container = styled.span`
  position: absolute;
  bottom: 31px;
  left: 34px;

  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
`;

const Navbar = () => {
  return <Container>Made with 💛 by Alexis Audouin</Container>;
};

export default Navbar;
