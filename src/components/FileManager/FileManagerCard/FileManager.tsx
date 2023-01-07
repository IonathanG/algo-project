import { Card } from "../../../shared/Styles";
import styled from "styled-components";
import AddIcon from "../../Icon/AddIcon";
import Table from "./_DataTable";
import { tableData } from "../../../data/tableData";

const FileManagerCard = styled(Card)`
  min-height: 500px;
`;

const Header = styled.header`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const FileManager = () => {
  return (
    <FileManagerCard>
      <Header>
        <h2>File manager</h2>
        <Right>
          <AddIcon />
          <span>Sort by</span>
          <span>Date</span>
        </Right>
      </Header>
      <Table data={tableData} />
    </FileManagerCard>
  );
};

export default FileManager;
