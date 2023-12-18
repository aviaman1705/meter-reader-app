import { Form } from "react-bootstrap";
import { Button as Btn } from "rsuite";
import { TypeAttributes } from "rsuite/esm/@types/common";

export default function ItemsPerPage(props: buttonProps) {
  return (
    <div id="select-option-wrapper">
      <label>
        הצג
        <Form.Select
          id="table-select-option"
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
        רשומות
      </label>
    </div>
  );
}

interface buttonProps {
  limit: number;
  onChange?(event: any): void;
  optins: number[];
}
