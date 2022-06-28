import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

import "./login.css";
export default function Login() {
  const navigate = useNavigate();
  const onLogin = (e) => {
    e.preventDefault();
    navigate("/customerregister");
  };
  return (
    <div className="login">
      <Card sx={{ maxWidth: 345 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          Corebase
        </Typography>
        <Divider />
        <CardActionArea>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 12,
            }}
          >
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              sx={{ marginTop: 0.5, fontSize: 12 }}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              sx={{ marginTop: 1 }}
            />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="large" variant="contained" fullWidth onClick={onLogin}>
            Login
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
