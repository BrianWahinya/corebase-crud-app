import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LocalDate } from "../../components";

export default function BasicDetails() {
  const matches470 = useMediaQuery("(max-width:470px)");
  return (
    <>
      <TextField
        id="id"
        label="Id"
        variant="outlined"
        sx={{ marginTop: 0.5, fontSize: 12 }}
      />
      <TextField
        id="fname"
        label="First Name"
        variant="outlined"
        sx={{ marginTop: 0.8, fontSize: 12 }}
      />
      <TextField
        id="lname"
        label="Last Name"
        variant="outlined"
        sx={{ marginTop: 0.8, marginBottom: 1, fontSize: 12 }}
      />
      <LocalDate
        type={matches470 ? "mobile" : "desktop"}
        sx={{ p: 5, fontSize: 12 }}
      />
      <FormControl sx={{ marginTop: 0.5 }}>
        <FormLabel id="gender-radio-group">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="gender-radio-group"
          name="gender-radio-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </>
  );
}
