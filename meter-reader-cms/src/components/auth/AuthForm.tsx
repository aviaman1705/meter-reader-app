import { Form, Formik, FormikHelpers } from "formik";
import Button from "../../utils/Button";
import { userCredentials } from "./auth.models";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";

import classes from "./../../Form.module.css";

export default function AuthForm(props: authFormProps) {
  return (
    <>
      <Formik
        initialValues={props.initialValues}
        validationSchema={props.validationSchema}
        onSubmit={(values, actions) => {
          props.onSubmit(values, actions);
        }}
      >
        {(formikProps) => (
          <Form>
            {props.formType === "register" ? (
              <TextField
                displayName="שם משתמש"
                field="username"
                formikProps={formikProps}
              />
            ) : null}

            <TextField
              displayName="מייל"
              field="email"
              formikProps={formikProps}
            />
            <TextField
              displayName="סיסמא"
              field="password"
              type="password"
              formikProps={formikProps}
            />

            <div className={classes["auth-buttons-section"]}>
              <Button disabled={formikProps.isSubmitting} type="submit">
                {props.btnText}
              </Button>
              <p className={classes["message"]}>
                {props.questionText}
                <Link to={props.secondBtnUrl}>{props.secondBtnText}</Link>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

interface authFormProps {
  initialValues: any;
  validationSchema: any;
  formType: string;

  btnText: string;
  secondBtnText: string;
  secondBtnUrl: string;
  questionText: string;
  //model: userCredentials;

  onSubmit(values: any, actions: FormikHelpers<userCredentials>): void;
}

AuthForm.defaultProps = {
  btnText: "כפתור",
  formType: "login",
};
