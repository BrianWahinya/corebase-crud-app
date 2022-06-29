import TextField from "@mui/material/TextField";

export default function Contact() {
  return (
    <>
      <TextField
        id="cellphone"
        label="Cellphone"
        variant="outlined"
        sx={{ marginTop: 0.5, fontSize: 12 }}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        sx={{ marginTop: 0.5, fontSize: 12 }}
      />
    </>
  );
}
