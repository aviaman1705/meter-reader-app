import { useState } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import YupPassword from "yup-password";
import axios, { AxiosResponse } from "axios";
import { authenticationResponse, registerDTO } from "./auth.models";
import { urlAccounts } from "../../endpoints";
import DisplayErrors from "../../utils/DisplayErrors";
import Loading from "../../utils/Loading";
import Swal from "sweetalert2";

import css from "./../../Form.module.css";
import AuthForm from "./AuthForm";

YupPassword(Yup);

export default function Register() {
  //* הצגת רכיב טעינה
  const [loading, setLoading] = useState(false);
  //* מערך שמציג שגיאות שרת
  const [errors, setErrors] = useState<string[]>([]);
  //* אובייקט לניווט לדף אחר
  const history = useHistory();

  // אובייקט שאחראי על הוולידציה של הטופס
  const RegisterSchema = Yup.object().shape({
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

  // פונקציה לביצוע הרשמה
  function register(credentials: registerDTO, actions: any) {
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

          let helper: string[] = [];

          error.response.data.forEach((err: string) => {
            if (err.toLocaleLowerCase().indexOf("alphanumeric") > -1) {
              err = "סיסמא חייבת לפחות לפחות תו אחד שאינו אלפאנומרי.";
            }

            if (err.toLocaleLowerCase().indexOf("lowercase") > -1) {
              err = "סיסמא חייבת להכיל לפחות אות קטנה אחת ('a'-'z').";
            }

            if (err.toLocaleLowerCase().indexOf("uppercase") > -1) {
              err = "סיסמא חייבת להכיל לפחות אות אחת גדולה ('A'-'Z').";
            }

            helper.push(err);
          });

          setErrors(helper);
          actions.setSubmitting(false);
        }, 2000);
      });
  }

  return (
    <>
      <h1 className={css["auth-page-title"]}>הרשמה</h1>
      <div className={css["auth-container"]}>
        {loading && <Loading left="150px" top="90px" />}
        <div className={css["form"]}>
          <AuthForm
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={RegisterSchema}
            secondBtnText="התחבר"
            secondBtnUrl="/login"
            questionText="כבר יש לך חשבון ? "
            onSubmit={(values, actions) => {
              register(values, actions);
            }}
            formType="register"
          />
          <DisplayErrors errors={errors} />
        </div>
      </div>
    </>
  );
}
