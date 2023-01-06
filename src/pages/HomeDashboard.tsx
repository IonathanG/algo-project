import styled from "styled-components";
import FileAnalytics from "../components/FileManager/FileAnalytics";
import FileManager from "../components/FileManager/FileManagerCard/FileManager";
import SharedFiles from "../components/FileManager/SharedFiles";

const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 32px;
`;

const CentralContainer = styled.div`
  width: 70%;
`;

const RightContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 37px;
`;

const HomeDashboard = () => {
  return (
    <Container>
      <CentralContainer>
        <FileManager />
      </CentralContainer>
      <RightContainer>
        <FileAnalytics />
        <SharedFiles />
      </RightContainer>
    </Container>
  );
};

export default HomeDashboard;
