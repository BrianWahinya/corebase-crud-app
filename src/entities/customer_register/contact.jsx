import { useEffect, useState } from "react";
import { TextFieldCustom } from "../../components";
import configs from "../../utils/configs";

export default function Contact() {
  const { cellphone, email } = configs.registration;

  return (
    <>
      <TextFieldCustom
        id="cellphone"
        lbl="Cellphone *"
        helpTxt={cellphone.info}
      />
      <TextFieldCustom
        id="email"
        lbl="Email *"
        helpTxt={email.info}
        sx={{
          marginTop: 1,
          fontSize: 12,
        }}
      />
    </>
  );
}
