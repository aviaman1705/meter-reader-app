import { useFormikContext } from "formik";

export default function DateField(props: dateFieldProps) {
  const { values, validateForm, touched, errors } = useFormikContext<any>();

  const trackDate = !values[props.field]
    ? ""
    : new Date(values[props.field]).toLocaleDateString("en-CA");

  let inputTouched = touched[props.field];
  let inputError = errors[props.field];

  return (
    <div className="form-group p-2">
      <label className="form-label" htmlFor={props.field}>
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
        className="form-control text-end"
        defaultValue={trackDate}
      />

      {touched[props.field] && errors[props.field] ? (
        <div className="text-danger text-end">
          {errors[props.field]?.toString()}
        </div>
      ) : null}
    </div>
  );
}

interface dateFieldProps {
  field: string;
  displayName: string;
  // onChange(e: any): void;
  // onBlur(e: any): void;
}
