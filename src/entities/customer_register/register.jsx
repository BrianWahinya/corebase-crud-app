import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import useMediaQuery from "@mui/material/useMediaQuery";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import { LocalDate, LocalStepper } from "../../components";

export default function Register() {
  const [location, setLocation] = useState("");
  const matches400 = useMediaQuery("(max-width:400px)");
  const notes = {
    id: { name: "idnote", info: "4-24 characters. Must be numbers" },
    fname: { name: "fnote", info: "4-24 characters. Must be letters" },
    lname: { name: "lnote", info: "4-24 characters. Must be letters" },
    cellphone: {
      name: "cellnote",
      info: "8-12 characters. Must be numbers. Must start with 0",
    },
    email: {
      name: "emailnote",
      info: "Must be a valid email. Example: user@email.com",
    },
    creditlimit: {
      name: "creditlimitnote",
      info: "1-10 characters. Must be numbers",
    },
  };

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const steps = [
    {
      label: "Basic Details",
      description: (
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
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </>
      ),
    },
    {
      label: "Contact",
      description: (
        <>
          <TextField
            id="outlined-basic"
            label="Cellphone"
            variant="outlined"
            sx={{ marginTop: 0.5, fontSize: 12 }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ marginTop: 0.5, fontSize: 12 }}
          />
        </>
      ),
    },
    {
      label: "Location",
      description: (
        <>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Town</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location}
              label="Location"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="nairobi">Nairobi</MenuItem>
              <MenuItem value="mombasa">Mombasa</MenuItem>
              <MenuItem value="nakuru">Nakuru</MenuItem>
              <MenuItem value="kisumu">Kisumu</MenuItem>
            </Select>
          </FormControl>
        </>
      ),
    },
    {
      label: "Finance",
      description: (
        <>
          <TextField
            id="outlined-basic"
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
      ),
    },
  ];

  return <LocalStepper dataObj={steps} />;
}
