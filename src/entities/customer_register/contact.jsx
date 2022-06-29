import TextField from "@mui/material/TextField";

export default function Contact() {
  return (
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
  );
}
