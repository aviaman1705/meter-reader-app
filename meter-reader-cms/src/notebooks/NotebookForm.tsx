import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { notebookDTO } from "./notebook.models";
import NumberField from "../forms/NumberField";
import Button from "../utils/Button";

import classes from "./../Table.module.css";

export default function NotebookForm(props: notebookFormProps) {
  return (
    <div className="col-xl-5 col-lg-6 col-md-8 offset-xl-7 offset-lg-6 offset-md-4 form-wrap">
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">{props.title}</h3>
        </div>

        <div className="card-body">
          <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
              number: Yup.number()
                .required("שדה מספר הוא שדה חובה!")
                .min(1, "נא הזן מספר הגדול מ-0"),
            })}
          >
            {(formikProps) => (
              <Form>
                <NumberField displayName="מספר פנקס" field="number" />
                <div className={`form-group ${classes["buttons-section"]} p-2`}>
                  <Button disabled={formikProps.isSubmitting} type="submit">
                    שמור שינויים
                  </Button>
                  <Link
                    id={`${classes["btn-cancel"]}`}
                    className="btn btn-secondary"
                    to="/tracks"
                  >
                    בטל
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

interface notebookFormProps {
  title: string;
  model: notebookDTO;
  onSubmit(values: notebookDTO, actions: FormikHelpers<notebookDTO>): void;
}
