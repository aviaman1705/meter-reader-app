import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import YupPassword from "yup-password";
import axios, { AxiosError, AxiosResponse } from "axios";
import AuthenticationContext from "./AuthenticationContext";
import { getClaims, saveToken } from "./handleJWT";
import { authenticationResponse, userCredentials } from "./auth.models";
import { urlAccounts } from "../../endpoints";
import AuthForm from "./AuthForm";
import DisplayErrors from "../../utils/DisplayErrors";
import Loading from "../../utils/Loading";

import css from "./../../Form.module.css";

YupPassword(Yup);

export default function Login() {
  const { update } = useContext(AuthenticationContext);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const history = useHistory();

  const SignupSchema = Yup.object().shape({
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

  async function login(credentials: userCredentials, actions: any) {
    setLoading(true);
    setErrors([]);

    axios
      .post<authenticationResponse>(`${urlAccounts}/login`, credentials)
      .then((response: AxiosResponse<any>) => {
        setTimeout(() => {
          // 1 save user token
          saveToken(response.data);
          // 2 set loading to false
          setLoading(false);
          // 3 update user context
          update(getClaims());
          // 4 redirect to home page
          history.push("/");
        }, 3000);
      })
      .catch((error: AxiosError) => {
        setTimeout(() => {
          if (
            error.code === "ERR_NETWORK" ||
            error.code === "ERR_BAD_RESPONSE"
          ) {
            setErrors(["ישנה תקלת תקשורת."]);
          }
          if (error.code === "ERR_BAD_REQUEST") {
            setErrors(["מייל הוא סיסמא אינם נכונים."]);
          }
          setLoading(false);
          actions.setSubmitting(false);
        }, 2000);
      });
  }

  return (
    <>
      <h1 className={css["auth-page-title"]}>כניסה</h1>
      <div className={css["auth-container"]}>
        {loading && <Loading left="48%" top="55%" />}
        <div className={css["form"]}>
          <AuthForm
            model={{ email: "", password: "" }}
            validationSchema={SignupSchema}
            btnText="כניסה"
            secondBtnText="הרשם"
            secondBtnUrl="/register"
            questionText="עוד אין לך חשבון ? "
            onSubmit={async (values, actions) => await login(values, actions)}
          />
          <DisplayErrors errors={errors} />
        </div>
      </div>
    </>
  );
}
