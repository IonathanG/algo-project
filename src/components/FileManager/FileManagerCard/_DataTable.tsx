import React, { useState, useMemo } from "react";
import styled from "styled-components";

const TableContainer = styled.table`
  width: 100%;
  border-spacing: 0px;

  th,
  td {
    padding: 20px 20px;
    border-top: 0.5px solid ${({ theme }) => theme.color_Border};
  }
`;

const TableHead = styled.thead`
  tr {
    th {
      font-size: 12px;
      font-weight: 500;
      color: ${({ theme }) => theme.color_Font_SubMenu};
    }
  }
`;

const TableBody = styled.tbody`
  td {
    font-size: 14px;
    font-weight: 600;
  }
`;

const ArrowIcon = styled.img`
  cursor: pointer;
  width: 14px;
  height: 6px;
  margin: -4px 0px 0px 12px;
  /* padding: 6px; */
`;

interface TableProps {
  data: {
    id: number;
    files: string;
    date: string;
    size: string;
    status: string;
  }[];
}

const Table: React.FC<TableProps> = (props) => {
  const { data } = props;
  const [sortBy, setSortBy] = useState<keyof TableProps["data"][0] | null>(
    null
  );
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (key: keyof TableProps["data"][0]) => {
    if (sortBy === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortDirection("asc");
    }
  };

  const sortedData = useMemo(() => {
    return data.sort((a, b) => {
      if (sortBy === null) {
        return 0;
      }

      if (a[sortBy] < b[sortBy]) {
        return sortDirection === "asc" ? -1 : 1;
      }

      if (a[sortBy] > b[sortBy]) {
        return sortDirection === "asc" ? 1 : -1;
      }

      return 0;
    });
  }, [data, sortBy, sortDirection]);

  return (
    <TableContainer>
      <TableHead>
        <tr>
          <th>Files</th>
          <th onClick={() => handleSort("date")}>
            <span>Date</span>
            <ArrowIcon src="/assets/Icon/ArrowDown.svg" alt="arrow-icon" />
          </th>
          <th onClick={() => handleSort("size")}>
            <span>Size</span>
            <ArrowIcon src="/assets/Icon/ArrowDown.svg" alt="arrow-icon" />
          </th>
          <th onClick={() => handleSort("status")}>
            <span>Status</span>
            <ArrowIcon src="/assets/Icon/ArrowDown.svg" alt="arrow-icon" />
          </th>
          <th></th>
          <th></th>
        </tr>
      </TableHead>
      <TableBody>
        {sortedData.map((item) => (
          <tr key={item.id}>
            <td>{item.files}</td>
            <td>{item.date}</td>
            <td>{item.size}</td>
            <td>{item.status}</td>
            <td>...</td>
            <td>...</td>
          </tr>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default Table;
