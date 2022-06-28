import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LocalDate, LocalStepper } from "../../components";

export default function Register() {
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
          <TextField
            id="outlined-basic"
            label="Gender"
            variant="outlined"
            sx={{ marginTop: 0.8, fontSize: 12 }}
          />
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
          <TextField
            id="outlined-basic"
            label="Town"
            variant="outlined"
            sx={{ marginTop: 0.5, fontSize: 12 }}
          />
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
          <TextField
            id="outlined-basic"
            label="Blocked"
            variant="outlined"
            sx={{ marginTop: 0.5, fontSize: 12 }}
          />
        </>
      ),
    },
  ];

  return <LocalStepper dataObj={steps} />;
}
