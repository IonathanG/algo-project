import { Outlet } from "react-router-dom";
import { SectionPage, SectionMain } from "../shared/Styles";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <>
      <SectionPage>
        {/* Side Navbar + Header*/}
        <Navbar />
        <Header />
        <SectionMain>
          <Outlet />
          {/* Main Content */}
        </SectionMain>
      </SectionPage>
    </>
  );
};

export default Layout;
