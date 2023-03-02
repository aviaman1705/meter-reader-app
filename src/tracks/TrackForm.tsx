import { Formik, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from "yup";
import TextField from "../forms/TextField";
import { trackCreationDTO } from "./tracks.model";
import MarkdownField from "../forms/MarkdownField";
import DateField from "../forms/DateField";
import parse from "date-fns/parse";
import { useState } from "react";
import Loading from "../utils/loading/Loading";

export default function TrackForm(props: trackFormProps) {
  //const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <>
      {props.isLoading ? <Loading /> : null}
      <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
          called: Yup.string()
            .required("שדה נקרא הוא שדה חובה")
            .matches(/^[0-9]+$/, "חובה להזין ספרות")
            .min(1, "חובה להזין תו 1 לפחות")
            .max(3, "ניתן להזין עד 3 תווים"),
          unCalled: Yup.string()
            .required("שדה לא נקרא הוא שדה חובה")
            .matches(/^[0-9]+$/, "חובה להזין ספרות")
            .min(1, "חובה להזין תו 1 לפחות")
            .max(3, "ניתן להזין עד 3 תווים"),
          desc: Yup.string()
            .required("שדה תיאור הוא שדה חובה")
            .min(1, "חובה להזין תו 1 לפחות")
            .max(100, "ניתן להזין עד 100 תווים"),
          date: Yup.date()
            .transform(function (value, originalValue) {
              if (this.isType(value)) {
                return value;
              }
              const result = parse(originalValue, "dd.MM.yyyy", new Date());
              return result;
            })
            .typeError("שדה תאריך הוא שדה חובה")
            .required("שדה תאריך הוא שדה חובה")
            .min("1969-11-13", "Date is too early"),
        })}
      >
        {(formikProps) => (
          <Form>
            <TextField field="called" displayName="נקרא"></TextField>
            <TextField field="unCalled" displayName="לא נקרא"></TextField>
            <MarkdownField field="desc" displayName="תיאור" />
            <DateField field="date" displayName="תאריך" />
            <Button disabled={formikProps.isSubmitting} type="submit">
              עריכה
            </Button>
            <Link className="btn btn-secondary" to="/tracks">
              ביטול
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

interface trackFormProps {
  model: trackCreationDTO;
  isLoading: boolean;
  onSubmit(
    values: trackCreationDTO,
    action: FormikHelpers<trackCreationDTO>
  ): void;
}
