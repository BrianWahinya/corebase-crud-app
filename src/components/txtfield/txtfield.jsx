import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import isEmail from "validator/lib/isEmail";
import isAlpha from "validator/lib/isAlpha";
import isInt from "validator/lib/isInt";
import isFloat from "validator/lib/isFloat";
import isLength from "validator/lib/isLength";

export default function TextFieldCustom({ id, lbl, val, helpTxt, sx }) {
  const [stateVal, setStateVal] = useState("");
  const [focus, setFocus] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleChange = (event) => {
    const val = event.target.value;
    setStateVal(val);
  };

  const handleFocus = () => {
    setFocus(true);
  };
  const handleBlur = () => {
    setFocus(false);
  };

  const validFunc = (elem) => {
    switch (elem) {
      case "id":
        return (
          isInt(stateVal, { min: 1, gt: 0, allow_leading_zeroes: false }) &&
          isLength(stateVal, { min: 4, max: 24 })
        );
      case "fname":
        return isAlpha(stateVal) && isLength(stateVal, { min: 3, max: 10 });
      case "lname":
        return isAlpha(stateVal) && isLength(stateVal, { min: 3, max: 10 });
      case "cellphone":
        return isInt(stateVal) && isLength(stateVal, { min: 8, max: 14 });
      case "email":
        return isEmail(stateVal) && isLength(stateVal, { max: 40 });
      case "creditlimit":
        return isFloat(stateVal);
      default:
        return;
    }
  };

  return (
    <>
      <TextField
        id={id}
        label={lbl}
        variant="outlined"
        value={stateVal}
        sx={
          sx
            ? sx
            : {
                marginTop: 0.5,
                fontSize: 12,
              }
        }
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        error={Boolean(stateVal && !validFunc(id))}
        color={stateVal && validFunc(id) ? "success" : !stateVal ? "" : "error"}
        helperText={
          focus === id ? helpTxt : stateVal && !validFunc(id) ? helpTxt : ""
        }
      />
    </>
  );
}
