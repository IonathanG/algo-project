import React from "react";
import { Outlet } from "react-router-dom";
import { SectionPage, SectionMain, SectionContent } from "../shared/Styles";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <>
      <SectionPage>
        {/* Side Navbar */}
        <Navbar />
        {/* Main Section => Header + Main Content */}
        <SectionMain>
          {/* Top Header */}
          <Header />
          {/* Main Content */}
          <SectionContent>
            <Outlet />
          </SectionContent>
        </SectionMain>
      </SectionPage>
    </>
  );
};

export default Layout;
