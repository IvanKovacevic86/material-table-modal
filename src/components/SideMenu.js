import React from "react";
import { Box } from "@mui/material";

const useStyles = {
  backgroundColor: "#253053",
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  left: "0px",
  width: "320px",
  height: "100%",
};

export default function SideMenu() {
  return <Box sx={useStyles}></Box>;
}
