import { Col, Form, Row } from "react-bootstrap";

export default function Search(props: searchProps) {
  return (
    <div id="search-input-wrap">
      <Form.Group as={Row} controlId="formPlaintextEmail">
        <Col sm="9">
          <Form.Control
            type="text"
            aria-describedby="inputSearch"
            onKeyUp={(e: any) => {
              props.onSearch(e);
            }}
          />
        </Col>
        <Form.Label column sm="auto" className="ps-0">
          :חפש
        </Form.Label>
      </Form.Group>
    </div>
  );
}

interface searchProps {
  onSearch(event: any): void;
}
