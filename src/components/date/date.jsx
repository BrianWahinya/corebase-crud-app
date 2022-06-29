import { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

export default function LocalDate({ type }) {
  const today = new Date().toLocaleDateString();
  const [value, setValue] = useState(new Date(today));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        {type === "desktop" ? (
          <DesktopDatePicker
            label="Date of Birth"
            inputFormat="dd/MM/yyyy"
            value={value}
            onChange={handleChange}
            maxDate={new Date(today)}
            renderInput={(params) => <TextField {...params} />}
          />
        ) : (
          <MobileDatePicker
            label="Date of Birth"
            inputFormat="dd/MM/yyyy"
            value={value}
            onChange={handleChange}
            maxDate={new Date(today)}
            renderInput={(params) => <TextField {...params} />}
          />
        )}
      </Stack>
    </LocalizationProvider>
  );
}
