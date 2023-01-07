import { Card } from "../../shared/Styles";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  height: 400px;
`;

const PieChart = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%; /* Makes the element a circle */
  border: 10px solid red; /* Adds a red border with a width of 10px */
  border-top: 20px solid green; /* Overrides the top border with a green border of width 20px */
  border-left: 30px solid blue; /* Overrides the left border with a blue border of width 30px */
  border-right: 40px solid yellow; /* Overrides the right border with a yellow border of width 40px */
  border-radius: 10px 20px 30px 40px; /* Rounds the corners of the borders */
`;

const FileAnalytics = () => {
  return (
    <Card>
      <Container>
        <h2>File Analytics</h2>
        <PieChart />
      </Container>
    </Card>
  );
};

export default FileAnalytics;
