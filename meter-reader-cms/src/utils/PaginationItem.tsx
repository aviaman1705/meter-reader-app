import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";

export default function PaginationItem(props: paginationItemProps) {
  const [currentPage, setCurrentPage] = useState<number>(props.page);

  const pageNumbers = 10;

  function ShowPaginationNumbers(pageNumbers: number) {
    let paginationNumbers: any[] = [];

    if (pageNumbers) {
      let showMax = 10;
      let endPage;
      let startPage;

      if (pageNumbers <= showMax) {
        startPage = 1;
        endPage = pageNumbers;
      } else {
        startPage = currentPage;
        if (startPage != pageNumbers && startPage + 1 != pageNumbers) {
          endPage = currentPage + showMax + 1;
        } else {
          endPage = pageNumbers;
        }

        for (let i = 0; i <= endPage; i++) {
          paginationNumbers.push(1);
        }
      }
    }

    return ShowRenderPageNumbers(paginationNumbers);
  }

  function ShowRenderPageNumbers(paginationNumbers: any[]) {
    if (paginationNumbers) {
      let result = paginationNumbers.map((number) => {
        return (
          <li className="page-item">
            <a
              className={
                (currentPage === number ? " active" : "") + " page-link"
              }
              key={number}
              //id={number}
              //onClick={this.handleClick}
            >
              {number}
            </a>
          </li>
        );
      });
      return result;
    }
  }

  return (
    <>
      <Pagination
        onClick={(e: any) => {
          props.onClick(e);
        }}
      >
        <Pagination.First />
        <Pagination.Prev />
        {ShowPaginationNumbers(10)}
        {/* {[...Array(props.pagesCount === 0 ? 1 : props.pagesCount)].map(
          (e, i) => (
            <Pagination.Item key={i} active={i + 1 === props.page}>
              {i + 1}
            </Pagination.Item>
          )
        )} */}
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
