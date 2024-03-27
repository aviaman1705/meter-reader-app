import { Col, Row } from "react-bootstrap";
import { tableHeaderDTO } from "./table.model";
// import PaginationItem from "./PaginationItem";
import "./TableFooter.css";

export default function TableFooter(props: tableFooterProps) {
  return (
    <>
      <Col md={12} className="d-flex justify-content-center">
        {/* <PaginationItem
          pagesCount={props.pageCount}
          page={props.page}
          onClick={(e) => props.onClick(e)}
        /> */}
      </Col>
      <Col md={12}>
        <div id="total-records-text">סה"כ {props.totalItems} רשומות</div>
      </Col>
    </>
  );
}

interface tableFooterProps {
  pageCount: number;
  page: number;
  totalItems: number;
  onClick(e: any): void;
}
