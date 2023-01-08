interface TableProps {
  filter: string | null | undefined;
  data: {
    files: { name: string; extension: string };
    date: string;
    size: string;
    status: string;
    favorite: boolean;
  }[];
}
export default TableProps;
