import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function Location() {
  const [location, setLocation] = useState("");
  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="location">Town</InputLabel>
        <Select
          labelId="location"
          id="location"
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
  );
}
