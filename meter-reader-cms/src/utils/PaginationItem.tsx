import Pagination from "react-bootstrap/Pagination";

export default function PaginationItem(props: paginationItemProps) {
  return (
    <>
      <Pagination
        onClick={(e: any) => {
          props.onClick(e);
        }}
      >
        <Pagination.First />
        <Pagination.Prev />
        {[...Array(props.pagesCount === 0 ? 1 : props.pagesCount)].map(
          (e, i) => (
            <Pagination.Item key={i} active={i + 1 === props.page}>
              {i + 1}
            </Pagination.Item>
          )
        )}
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </>
  );
}

interface paginationItemProps {
  pagesCount: number;
  page: number;
  onClick(event: any): void;
}
