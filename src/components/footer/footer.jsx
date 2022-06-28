import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <Box>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
              <Typography sx={{ fontSize: 12, alignSelf: "bottom" }}>
                Copyright&copy;2022
              </Typography>
              <Link
                href="https://www.corebase.co.ke/"
                color="inherit"
                rel="noreferrer noopener"
                target="_blank"
                sx={{ fontSize: 12, verticalAlign: "top" }}
              >
                CorebaseSolutions
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
