import { Col, Row } from "react-bootstrap";
import { tableHeaderDTO } from "./table.model";
import PaginationItem from "./PaginationItem";

export default function TableFooter(props: tableFooterProps) {
  return (
    <>
      <Row className="align-items-center p-3">
        <Col md="6">
          <PaginationItem
            pagesCount={props.pageCount}
            page={props.page}
            onClick={(e) => props.onClick(e)}
          />
        </Col>
        <Col md="6">
          <div>סה"כ {props.totalItems} רשומות</div>
        </Col>
      </Row>
    </>
  );
}

interface tableFooterProps {
  pageCount: number;
  page: number;
  totalItems: number;
  onClick(e: any): void;
}
