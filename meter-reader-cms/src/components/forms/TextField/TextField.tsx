import { Field, ErrorMessage } from "formik";

import css from "./../../../Form.module.css";

export default function TextField(props: textFieldProps) {
  return (
    <div className="form-group p-2">
      <label className={css["form-label"]} htmlFor={props.field}>
        {props.displayName}
      </label>
      <Field
        id={props.field}
        name={props.field}
        type={props.type}
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
  type: "text" | "password" | "date";
}

TextField.defaultProps = {
  type: "text",
};
