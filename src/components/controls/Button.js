import React from "react";
import { Button as MuiButton } from "@mui/material";

const btn = {
  margin: "4px",
  textTransform: "none",
};

export default function Button(props) {
  const { text, size, color, variant, onClick, ...other } = props;
  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
      sx={btn}
    >
      {text}
    </MuiButton>
  );
}
