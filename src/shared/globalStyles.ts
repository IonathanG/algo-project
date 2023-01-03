import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;  
  font-family: 'Ubuntu', 'sans-serif';
 background-color: ${(props) => props.theme.background_MainSection};
}

body,
h1,
h2,
p,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

h1{
  font-size: 22px;
  //letter-spacing: 0.2px;
}

h2{
  font-size: 18px;
  //letter-spacing: 0.2px;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  width: 100%;
  height: auto;
}
`;
