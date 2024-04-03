import { ErrorMessage, useFormikContext } from "formik";

import classes from "./../../Form.module.css";

export default function DateField(props: dateFieldProps) {
  const { values, validateForm, touched, errors } = useFormikContext<any>();

  const trackDate = !values[props.field]
    ? ""
    : new Date(values[props.field]).toLocaleDateString("en-CA");

  // let inputTouched = touched[props.field];
  // let inputError = errors[props.field];

  return (
    <div className={classes["form-group"]}>
      <label className={classes["form-label"]} htmlFor={props.field}>
        {props.displayName}
      </label>
      <input
        id={props.field}
        name={props.field}
        type="date"
        onChange={(e) => {
          const date = new Date(e.currentTarget.value + "T00:00:00");
          values[props.field] = date;
          validateForm();
        }}
        className="form-control"
        defaultValue={trackDate}
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

interface dateFieldProps {
  field: string;
  displayName: string;
}
