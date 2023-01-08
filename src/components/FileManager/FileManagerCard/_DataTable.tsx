import React, { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import IconExtra from "../../Icon/IconExtra";
import IconExtension from "../../Icon/IconExtension";
import IconName from "../../Icon/model";
import TableProps from "./model";
import Icon from "../../Icon";
import IconFavorite from "../../Icon/IconFavorite";

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
  th {
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.color_Font_SubMenu};
  }
`;

const TableBody = styled.tbody`
  td {
    font-size: 14px;
    font-weight: 600;

    .nameContainer {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .statusContainer {
      display: flex;
      align-items: center;
      gap: 12px;
      img {
        width: 16px;
        height: 16px;
      }
      span {
        text-transform: capitalize;
      }
    }

    .star {
      padding: 5px;
      cursor: pointer;
    }
  }
`;

const ArrowIcon = styled.img`
  cursor: pointer;
  width: 14px;
  height: 6px;
  margin: -4px 0px 0px 12px;
`;

const Table: React.FC<TableProps> = (props) => {
  const { data, filter } = props;
  const [sortBy, setSortBy] = useState<keyof TableProps["data"][0] | null>(
    null
  );
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    console.log(filter);
  }, [filter]);

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

  const pickIcon = (extension: string) => {
    switch (extension) {
      case "completed":
        return IconName.completedIcon;
      case "pending":
        return IconName.pendingIcon;
      case "on hold":
        return IconName.onHoldIcon;
      case "fig":
        return IconName.figma;
      case "ai":
        return IconName.illustrator;
      case "id":
        return IconName.inDesign;
      case "psd":
        return IconName.photoshop;
      case "pr":
        return IconName.premierePro;
      case "sketch":
        return IconName.sketch;
      case "xd":
        return IconName.xd;
      default:
        return IconName.sketch;
    }
  };

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
        {sortedData
          .filter((item) => (filter ? item.files.extension === filter : item))
          .map((item) => (
            <tr key={item.files.name}>
              <td>
                <div className="nameContainer">
                  <IconExtension name={pickIcon(item.files.extension)} />
                  {item.files.name}.{item.files.extension}
                </div>
              </td>
              <td>{item.date}</td>
              <td>{item.size}</td>
              <td>
                <div className="statusContainer">
                  <Icon name={pickIcon(item.status)} />
                  <span>{item.status}</span>
                </div>
              </td>
              <td>
                <div className="star">
                  <IconFavorite isFavorite={item.favorite} />
                </div>
              </td>
              <td>
                <IconExtra />
              </td>
            </tr>
          ))}
      </TableBody>
    </TableContainer>
  );
};

export default Table;
