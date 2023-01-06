import { Card } from "../../../shared/Styles";
import styled from "styled-components";
import AddIcon from "../../Icon/AddIcon";
import Table from "./_DataTable";

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
  const data = [
    {
      id: 1,
      files: "file1.txt",
      date: "2022-01-01",
      size: "10KB",
      status: "sent",
    },
    {
      id: 2,
      files: "file2.txt",
      date: "2022-01-02",
      size: "20KB",
      status: "received",
    },
    {
      id: 3,
      files: "file3.txt",
      date: "2022-01-03",
      size: "30KB",
      status: "received",
    },
  ];

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
      <Table data={data} />{" "}
    </FileManagerCard>
  );
};

export default FileManager;
