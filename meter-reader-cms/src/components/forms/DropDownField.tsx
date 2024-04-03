import { ErrorMessage, useFormikContext } from "formik";
import { ReactElement, useState } from "react";
import Form from "react-bootstrap/Form";

import classes from "./../../Form.module.css";

export default function DropDownField(props: dropDownFieldProps) {
  const { values, validateForm, touched, errors } = useFormikContext<any>();
  const [value, setValue] = useState<number>(props.ddlValue);

  return (
    <div className={classes["form-group"]}>
      <label className={classes["form-label"]} htmlFor={props.field}>
        {props.displayName}
      </label>

      <Form.Select
        id={props.field}
        name={props.field}
        aria-label="Default select example"
        onChange={(event: any) => {
          console.log(values.notebookId);
          setValue(event.target.value);
          values.notebookId = event.target.value;
          console.log(values.notebookId);
          console.log(values);
        }}
        value={value}
        className="form-control"
      >
        <option value="-1">{props.label}</option>
        {props.list?.map((item, index) => (
          <option value={item.value} key={index}>
            {item.text}
          </option>
        ))}
      </Form.Select>
      <ErrorMessage name={props.field}>
        {(msg: string) => (
          <span id={`input-${props.field}-error`} className="text-danger">
            {msg}
          </span>
        )}
      </ErrorMessage>
    </div>
  );
}

interface dropDownFieldProps {
  field: string;
  displayName: string;
  ddlValue: number;
  label: string;
  touched: boolean;
  error?: string;
  list: dropDownItemDTO[];
  onChange(e: any): void;
}
DropDownField.defaultProps = {
  ddlValue: -1,
  touched: false,
};

export interface dropDownItemDTO {
  text: string;
  value: string;
}
