import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;

  text-align: justify;
  letter-spacing: -0.02em;

  color: #1a202c;
`;

const User = () => {
  return <Container>Alexis Audouin</Container>;
};

export default User;
