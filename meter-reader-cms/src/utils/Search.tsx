import { Col, Form, Row } from "react-bootstrap";

export default function Search(props: searchProps) {
  return (
    <div id="search-input-wrap">
      <Form.Control
        type="text"
        placeholder="חפש..."
        aria-describedby="inputSearch"
        onKeyUp={(e: any) => {
          props.onSearch(e);
        }}
      />
    </div>
  );
}

interface searchProps {
  onSearch(event: any): void;
}
