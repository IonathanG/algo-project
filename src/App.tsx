import React from "react";
import { Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./shared/globalStyles";
import { LightTheme } from "./shared/Theme";
import Layout from "./layout/Layout";
import HomeDashboard from "./pages/HomeDashboard";

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.background_MainSection};
`;

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <>
        <GlobalStyle />
        <AppContainer>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<HomeDashboard />} />
              <Route path="*" element={<HomeDashboard />} />
            </Route>
          </Routes>
        </AppContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
