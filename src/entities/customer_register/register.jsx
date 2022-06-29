import React, { useState } from "react";
import { LocalStepper } from "../../components";
import BasicDetails from "./basicdetails";
import Contact from "./contact";
import Finance from "./finance";
import Location from "./location";

export default function Register() {
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
      description: <BasicDetails />,
    },
    {
      label: "Contact",
      description: <Contact />,
    },
    {
      label: "Location",
      description: <Location />,
    },
    {
      label: "Finance",
      description: <Finance />,
    },
  ];

  return <LocalStepper dataObj={steps} />;
}
