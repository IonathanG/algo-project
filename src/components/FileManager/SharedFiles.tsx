import { Card } from "../../shared/Styles";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  height: 475px;
`;

const SharedFiles = () => {
  return (
    <Card>
      <Container>
        <h2>Shared files</h2>
      </Container>
    </Card>
  );
};

export default SharedFiles;
