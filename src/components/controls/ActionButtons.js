import { Button } from "@mui/material";
import React from "react";

export default function ActionButtons(props) {
  const { color, children, onClick } = props;
  return <Button onClick={onClick}>{children}</Button>;
}
