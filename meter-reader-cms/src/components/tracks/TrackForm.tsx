import { useState, useEffect } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import axios, { AxiosError, AxiosResponse } from "axios";
import { urlNotebooks } from "../../endpoints";
import { trackDTO } from "./track.models";
import { notebookDTO } from "../notebooks/notebook.models";
import Button from "../../utils/Button";
import TextField from "../forms/TextField";
import NumberField from "../forms/NumberField";
import DateField from "../forms/DateField";
import DropDownField, { dropDownItemDTO } from "../forms/DropDownField";

import classes from "./../../Table.module.css";
import { trackSchema } from "../../Schema";
import SelectField from "../forms/SelectField";

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
    <div className="card card-primary">
      <div className="card-header">
        <h3 className="card-title">{props.title}</h3>
      </div>

      <div className="card-body">
        <Formik
          initialValues={props.model}
          onSubmit={props.onSubmit}
          validationSchema={trackSchema}
        >
          {(formikProps) => (
            <Form>
              <TextField
                label="מ-תאריך"
                name="fromDate"
                type="date"
                placeholder="בחר מ-תאריך"
              />

              <TextField
                label=" עד תאריך"
                name="toDate"
                type="date"
                placeholder="בחר עד-תאריך"
              />
              <SelectField
                label="פנקס"
                name="notebookId"
                placeholder="בחר פנקס..."
              >
                {
                  <>
                    <option value="">בחר פנקס...</option>
                    {notebooks?.map((item, index) => (
                      <option value={item.value} key={index}>
                        {item.text}
                      </option>
                    ))}
                  </>
                }
              </SelectField>
              <TextField
                label="תיאור"
                name="desc"
                type="text"
                placeholder="הזן תיאור"
              />

              <TextField
                label="נקרא"
                name="called"
                type="number"
                placeholder="הזן כמות מונים שנקראו"
              />

              <TextField
                label="נקרא"
                name="unCalled"
                type="number"
                placeholder="הזן כמות מונים שלא נקראו"
              />
              <div className={`form-group ${classes["buttons-section"]} p-2`}>
                <Button disabled={formikProps.isSubmitting} type="submit">
                  שמור שינויים
                </Button>
                <Button
                  className={`${classes["btn-cancel"]}`}
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
  );
}

interface trackFormProps {
  title: string;
  model: trackDTO;
  ddlNotebooksValue?: number;
  onSubmit(values: trackDTO, actions: FormikHelpers<trackDTO>): void;
}
