import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Finance() {
  return (
    <>
      <TextField
        id="creditlimit"
        label="Credit Limit"
        variant="outlined"
        sx={{ marginTop: 0.5, fontSize: 12 }}
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
