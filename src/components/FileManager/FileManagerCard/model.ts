interface TableProps {
  data: {
    files: { name: string; extension: string };
    date: string;
    size: string;
    status: string;
    favorite: boolean;
  }[];
}
export default TableProps;
