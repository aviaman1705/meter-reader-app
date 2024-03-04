import { Form, Formik, FormikHelpers } from "formik";
import TextField from "../../forms/TextField/TextField";
import Button from "../../utils/Button";
import { Link } from "react-router-dom";
import { registerDTO } from "../auth.models";

import classes from "./../../form.module.css";

export default function RegisterForm(props: registerFormProps) {
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={props.validationSchema}
        onSubmit={(values, actions) => {
          props.onSubmit(values, actions);
        }}
      >
        {(formikProps) => (
          <Form>
            <TextField displayName="שם משתמש" field="username" />
            <TextField displayName="מייל" field="email" />
            <TextField displayName="סיסמא" field="password" type="password" />
            <Button disabled={formikProps.isSubmitting} type="submit">
              {props.btnText}
            </Button>
            <p className={classes["message"]}>
              {props.questionText}
              <Link to={props.secondBtnUrl}>{props.secondBtnText}</Link>
            </p>
          </Form>
        )}
      </Formik>
    </>
  );
}

interface registerFormProps {
  btnText: string;
  secondBtnText: string;
  secondBtnUrl: string;
  questionText: string;
  validationSchema: any;
  model: registerDTO;

  onSubmit(values: registerDTO, actions: FormikHelpers<registerDTO>): void;
}

RegisterForm.defaultProps = {
  btnText: "כפתור",
};
