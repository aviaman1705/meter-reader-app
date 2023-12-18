import { Form, Formik, FormikHelpers } from "formik";
import Button from "../utils/Button";
import TextField from "../forms/TextField/TextField";
import { userCredentials } from "./auth.models";
import css from "./Register.module.css";
import { Link } from "react-router-dom";

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
            <Button disabled={formikProps.isSubmitting} type="submit">
              {props.btnText}
            </Button>
            <p className={css["message"]}>
              {props.questionText}
              <Link to={props.secondBtnUrl}>{props.secondBtnText}</Link>
            </p>
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
