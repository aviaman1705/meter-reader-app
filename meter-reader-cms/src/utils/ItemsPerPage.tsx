import { Form } from "react-bootstrap";
import { Button as Btn } from "rsuite";
import { TypeAttributes } from "rsuite/esm/@types/common";

import classes from "./../Table.module.css";

export default function ItemsPerPage(props: buttonProps) {
  return (
    <div id={`${classes["per-page-item"]}`}>
      <label id={`${classes["table-select-label"]}`}>הצג </label>
      <Form.Select
        id={`${classes["table-select-option"]}`}
        onChange={props.onChange}
        defaultValue={props.limit}
        aria-label="Default select example"
      >
        {props.optins.map(function (option, index) {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </Form.Select>
    </div>
  );
}

interface buttonProps {
  limit: number;
  onChange?(event: any): void;
  optins: number[];
}
