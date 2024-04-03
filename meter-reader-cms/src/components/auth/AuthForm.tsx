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
        initialValues={{
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
            <TextField displayName="מייל" field="email" />
            <TextField displayName="סיסמא" field="password" type="password" />
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
  btnText: string;
  secondBtnText: string;
  secondBtnUrl: string;
  questionText: string;
  validationSchema: any;
  model: userCredentials;

  onSubmit(
    values: userCredentials,
    actions: FormikHelpers<userCredentials>
  ): void;
}

AuthForm.defaultProps = {
  btnText: "כפתור",
};
