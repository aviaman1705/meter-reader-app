import { Field, ErrorMessage, getIn } from "formik";

import classes from "./../../Form.module.css";

export default function TextField(props: textFieldProps) {
  function getStyles(errors: string[], fieldName: string) {
    if (getIn(errors, fieldName)) {
      return {
        border: "1px solid red",
      };
    }
  }

  return (
    <div className={classes["form-group"]}>
      <label className={classes["form-label"]} htmlFor={props.field}>
        {props.displayName}
      </label>
      <Field
        id={props.field}
        name={props.field}
        type={props.type}
        className="form-control"
        style={getStyles(props.formikProps.errors, props.field)}
        placeholder={props.displayName}
      />
      <div>
        <ErrorMessage name={props.field}>
          {(msg: string) => (
            <span id={`input-${props.field}-error`} className="text-danger">
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
  formikProps: any;
}

TextField.defaultProps = {
  type: "text",
};
