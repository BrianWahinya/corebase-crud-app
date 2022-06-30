import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { TextFieldCustom } from "../../components";
import configs from "../../utils/configs";

export default function Finance() {
  const { creditlimit } = configs.registration;
  return (
    <>
      <TextFieldCustom
        id="creditlimit"
        lbl="Credit Limit"
        helpTxt={creditlimit.info}
      />
      <FormGroup sx={{ marginTop: 0.5, fontSize: 12 }}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Blocked"
        />
      </FormGroup>
    </>
  );
}
