import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LocalDate } from "../../components";

export default function BasicDetails() {
  const matches400 = useMediaQuery("(max-width:400px)");
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Id"
        variant="outlined"
        sx={{ marginTop: 0.5, fontSize: 12 }}
      />
      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        sx={{ marginTop: 0.8, fontSize: 12 }}
      />
      <TextField
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        sx={{ marginTop: 0.8, marginBottom: 1, fontSize: 12 }}
      />
      <LocalDate
        type={matches400 ? "mobile" : "desktop"}
        sx={{ p: 5, fontSize: 12 }}
      />
      <FormControl sx={{ marginTop: 0.5 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </>
  );
}
