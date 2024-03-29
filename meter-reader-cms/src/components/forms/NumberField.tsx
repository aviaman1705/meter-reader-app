import { Field, ErrorMessage } from "formik";

import css from "./../../Form.module.css";

export default function NumberField(props: textFieldProps) {
  return (
    <div className="form-group p-2">
      <label className="form-label" htmlFor={props.field}>
        {props.displayName}
      </label>
      <Field
        id={props.field}
        name={props.field}
        type="number"
        className="form-control text-end"
        placeholder={props.displayName}
      />
      <div>
        <ErrorMessage name={props.field}>
          {(msg: string) => (
            <span
              id={`input-${props.field}-error`}
              className="text-danger text-end"
            >
              {msg}
            </span>
          )}
        </ErrorMessage>
      </div>
    </div>
  );
}

interface textFieldProps {
  field: string;
  displayName: string;
}
