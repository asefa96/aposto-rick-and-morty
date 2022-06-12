import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import bg from "../assets/images/cluster.jpg";
import { Paper, Typography } from "@mui/material";

const appBarImg = require("../assets/images/rickmorty.png");



export default function Bar() {
  React.useState<null | HTMLElement>(null);
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        sx={{
          background: "rgb(60, 62, 68)",
          color: "white",
          alignItems:"center"
        }}
      >
        <Toolbar>
          <img width="100" height="50" src={appBarImg} />
          <Typography  variant="h4">Rick And Morty Api Aposto</Typography>
          <img width="100" height="50" src={appBarImg} />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "none" } }}> </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
