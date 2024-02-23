import { useState, useEffect } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import axios, { AxiosError, AxiosResponse } from "axios";
import { parse } from "date-fns";
import { urlNotebooks } from "../endpoints";
import { trackDTO } from "./track.models";
import { notebookDTO } from "../notebooks/notebook.models";
import Button from "../utils/Button";
import TextField from "../forms/TextField/TextField";
import NumberField from "../forms/NumberField";
import DateField from "../forms/DateField";
import DropDownField, { dropDownItemDTO } from "../forms/DropDownField";

import classes from "./../Table.module.css";

export default function TrackForm(props: trackFormProps) {
  const [notebooks, setNotebooks] = useState<dropDownItemDTO[]>([]);

  const history = useHistory();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios
      .get(`${urlNotebooks}/GetNotebooks`)
      .then((response: AxiosResponse<notebookDTO[]>) => {
        let mappedNotebooks: dropDownItemDTO[];

        mappedNotebooks = response.data.map((notebook) => {
          return {
            text: notebook.number.toString(),
            value: notebook.id.toString(),
          };
        });

        setNotebooks(mappedNotebooks);
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  };

  return (
    // <div className="col-xl-5 col-lg-6 col-md-8 offset-xl-7 offset-lg-6 offset-md-4 form-wrap">
    <div className="col-lg-3 offset-lg-9">
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">{props.title}</h3>
        </div>

        <div className="card-body">
          <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
              date: Yup.date()
                .transform(function (value, originalValue) {
                  if (this.isType(value)) {
                    return value;
                  }
                  const result = parse(originalValue, "dd.MM.yyyy", new Date());
                  return result;
                })
                .typeError("שדה תאריך הוא שדה חובה!")
                .required()
                .min("2022-11-13", "Date is too early"),
              notebookId: Yup.number().required("חובה לבחור מספר פנקס!"),
              desc: Yup.string()
                .required("שדה תיאור הוא שדה חובה!")
                .min(2, "חובה להזין 2 תווים לפחות!"),
              called: Yup.number()
                .required("שדה נקרא הוא שדה חובה!")
                .min(0, "לא ניתן להזין מספר שלילי"),
              unCalled: Yup.number()
                .required("שדה לא נקרא הוא שדה חובה!")
                .min(0, "לא ניתן להזין מספר שלילי"),
            })}
          >
            {(formikProps) => (
              <Form>
                <DateField displayName="תאריך" field="date" />
                <DropDownField
                  displayName="פנקס"
                  label="בחר פנקס..."
                  field="notebookId"
                  list={notebooks}
                  ddlValue={props.ddlNotebooksValue}
                  onChange={formikProps.handleChange}
                />
                <TextField displayName="תיאור" field="desc" />
                <NumberField displayName="נקרא" field="called" />
                <NumberField displayName="לא נקרא" field="unCalled" />
                <div className={`form-group ${classes["buttons-section"]} p-2`}>
                  <Button
                    id={`${classes["system-btn"]}`}
                    disabled={formikProps.isSubmitting}
                    type="submit"
                  >
                    שמור שינויים
                  </Button>
                  <Button
                    id={`${classes["btn-cancel"]}`}
                    variant="secondary"
                    onClick={() => {
                      history.push("/tracks");
                    }}
                  >
                    בטל
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

interface trackFormProps {
  title: string;
  model: trackDTO;
  ddlNotebooksValue?: number;
  onSubmit(values: trackDTO, actions: FormikHelpers<trackDTO>): void;
}
