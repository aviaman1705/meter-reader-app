let isValid = null;

export const usernameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    isValid = action.val.trim().length >= 2;

    if (!isValid) {
      return {
        value: action.val,
        isValid: isValid,
        msg: "שם משתמש חייב להכיל לפחות 2 תווים.",
      };
    }

    return {
      value: action.val,
      isValid: isValid,
      msg: "",
    };
  }

  if (action.type === "INPUT_BLUR") {
    isValid = action.val.trim().length >= 2;

    if (!isValid) {
      return {
        value: action.val,
        isValid: isValid,
        msg: "שם משתמש חייב להכיל לפחות 2 תווים.",
      };
    }

    return {
      value: action.val,
      isValid: isValid,
      msg: "",
    };
  }

  if (action.type === "SUBMIT") {
    isValid = action.val.trim().length >= 2;

    if (!isValid) {
      return {
        value: action.val,
        isValid: isValid,
        msg: "שם משתמש חייב להכיל לפחות 2 תווים.",
      };
    }

    return {
      value: action.val,
      isValid: isValid,
      msg: "",
    };
  }

  return { value: "", isValid: false, msg: "" };
};

export const emailReducer = (state, action) => {
  let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (action.type === "USER_INPUT") {
    isValid = action.val.trim().length > 0;

    if (!isValid) {
      return {
        value: action.val,
        isValid: isValid,
        msg: "שדה מייל הוא שדה חובה",
      };
    }

    isValid = emailRegex.test(action.val);

    if (!isValid) {
      return {
        value: action.val,
        isValid: isValid,
        msg: "כתובת אימייל לא חוקית.",
      };
    }

    return { value: action.val, isValid: false, msg: "" };
  }
  if (action.type === "INPUT_BLUR") {
    isValid = action.val.trim().length > 0;

    if (!isValid) {
      return {
        value: action.val,
        isValid: isValid,
        msg: "שדה מייל הוא שדה חובה",
      };
    }

    isValid = emailRegex.test(action.val);

    if (!isValid) {
      return {
        value: action.val,
        isValid: isValid,
        msg: "כתובת אימייל לא חוקית.",
      };
    }

    return { value: action.val, isValid: false, msg: "" };
  }

  if (action.type === "SUBMIT") {
    isValid = action.val.trim().length > 0;

    if (!isValid) {
      return {
        value: action.val,
        isValid: isValid,
        msg: "שדה מייל הוא שדה חובה",
      };
    }

    isValid = emailRegex.test(action.val);

    if (!isValid) {
      return {
        value: action.val,
        isValid: isValid,
        msg: "כתובת אימייל לא חוקית.",
      };
    }

    return { value: action.val, isValid: false, msg: "" };
  }

  return { value: "", isValid: false, msg: "" };
};

export const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    isValid = action.val.trim().length > 0;

    if (!isValid) {
      return {
        value: action.val,
        isValid: isValid,
        msg: "שדה סיסמא הוא שדה חובה",
      };
    }

    isValid = state.value.trim().length >= 6;

    if (!isValid) {
      return {
        value: action.val,
        isValid: isValid,
        msg: "סיסמא חייבת להכיל לפחות 6 תווים.",
      };
    }

    return { value: action.val, isValid: isValid, msg: "" };
  }
  if (action.type === "INPUT_BLUR") {
    isValid = state.value.trim().length > 0;

    if (!isValid) {
      return {
        value: action.val,
        isValid: isValid,
        msg: "שדה סיסמא הוא שדה חובה",
      };
    }

    isValid = state.value.trim().length >= 6;

    if (!isValid) {
      return {
        value: action.val,
        isValid: isValid,
        msg: "סיסמא חייבת להכיל לפחות 6 תווים.",
      };
    }

    return { value: action.val, isValid: false, msg: "" };
  }

  if (action.type === "SUBMIT") {
    isValid = state.value.trim().length > 0;

    if (!isValid) {
      return {
        value: action.val,
        isValid: isValid,
        msg: "שדה סיסמא הוא שדה חובה",
      };
    }

    isValid = state.value.trim().length >= 6;

    if (!isValid) {
      return {
        value: action.val,
        isValid: isValid,
        msg: "סיסמא חייבת להכיל לפחות 6 תווים.",
      };
    }

    return { value: action.val, isValid: false, msg: "" };
  }

  return { value: "", isValid: false, msg: "" };
};

// export const nameReducer = (state, action) => {
//   if (action.type === "USER_INPUT") {
//     return { value: action.val, isValid: action.val.trim().length >= 2 };
//   }
//   if (action.type === "INPUT_BLUR") {
//     return { value: state.value, isValid: state.value.trim().length >= 2 };
//   }
//   if (action.type === "SUBMIT") {
//     return { value: state.value, isValid: state.value.trim().length >= 2 };
//   }
//   if (action.type === "EMPTY_FORM") {
//     return { value: "", isValid: null };
//   }
//   return { value: "", isValid: false };
// };
