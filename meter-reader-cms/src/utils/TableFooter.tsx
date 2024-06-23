import { Col } from "react-bootstrap";

export default function TableFooter(props: tableFooterProps) {
  return (
    <>
      <div id="total-records-text">סה"כ {props.totalItems} רשומות</div>
    </>
  );
}

interface tableFooterProps {
  itemsPerPage: number;
  page: number;
  totalItems: number;
  onClick(e: any): void;
}
