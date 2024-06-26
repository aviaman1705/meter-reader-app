import { useState } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import YupPassword from "yup-password";
import axios, { AxiosResponse } from "axios";
import Swal from "sweetalert2";
import { authenticationResponse, registerDTO } from "./auth.models";
import { urlAccounts } from "../../endpoints";
import DisplayErrors from "../../utils/DisplayErrors";
import Loading from "../../utils/Loading";
import RegisterForm from "./Register/RegisterForm";

import css from "./../../Form.module.css";

YupPassword(Yup);

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const history = useHistory();

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "שם חייב להכיל להכיל 2 תווים לפחות")
      .required("חובה להזין שם"),
    email: Yup.string().email("הזן מייל תקין").required("חובה להזין מייל"),
    password: Yup.string()
      .password()
      .min(6, "סיסמא חייבת להכיל 6 תווים לפחות")
      .minNumbers(1, "סיסמא חייבת להכיל ספרה 1 לפחות")
      .minSymbols(1, "סיסמא חייבת להכיל תו מיוחד 1")
      .minLowercase(1, "סיסמא חייבת להכיל אות 1 קטנה")
      .minUppercase(1, "סיסמא חייבת להכיל אות 1 גדולה")
      .required("חובה להזין סיסמא"),
  });

  async function register(credentials: registerDTO, actions: any) {
    setLoading(true);
    setErrors([]);

    axios
      .post<authenticationResponse>(`${urlAccounts}/create`, credentials)
      .then((response: AxiosResponse<any>) => {
        setTimeout(() => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "תהליך הרשמה בוצע בהצלחה",
            text: "מיד תועבר לעמוד כניסה",
            showConfirmButton: false,
            timer: 2500,
          }).then((result) => {
            history.push(`/login`);
          });
        }, 2000);
      })
      .catch((error) => {
        setTimeout(() => {
          setLoading(false);

          if (
            error.response.data[0].toLocaleLowerCase().indexOf("username") > -1
          ) {
            setErrors(["שם משתמש כבר קיים במערכת."]);
          }
          if (
            error.response.data[0].toLocaleLowerCase().indexOf("email") > -1
          ) {
            setErrors(["מייל: המייל כבר קיים במערכת"]);
          }
          actions.setSubmitting(false);
        }, 2000);
      });
  }

  return (
    <>
      <h1 className={css["auth-page-title"]}>הרשמה</h1>
      <div className={css["auth-container"]}>
        {loading && <Loading left="48%" top="55%" />}
        <div className={css["form"]}>
          <RegisterForm
            model={{ username: "", email: "", password: "" }}
            validationSchema={SignupSchema}
            btnText="הרשמה"
            secondBtnText="התחבר"
            secondBtnUrl="/login"
            questionText="כבר יש לך חשבון ? "
            onSubmit={async (values, actions) =>
              await register(values, actions)
            }
          />
          <DisplayErrors errors={errors} />
        </div>
      </div>
    </>
  );
}
