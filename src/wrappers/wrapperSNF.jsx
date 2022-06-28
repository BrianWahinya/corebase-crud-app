import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { Navbar, Sidebar, Footer } from "../components";

export default function WrapperSNF({ comp }) {
  const [state, setState] = useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Navbar toggleDrawer={toggleDrawer} open={state.left} />
      <Sidebar toggleDrawer={toggleDrawer} open={state.left} />
      <Container sx={{ minHeight: "85vh" }}>
        <Box sx={{ my: 1 }}>{comp}</Box>
      </Container>
      <Footer />
    </>
  );
}
