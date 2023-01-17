import React from "react";
import { TextField } from "@mui/material";

const textField = {
  width: "80%",
  margin: "8px",
};

export default function Input(props) {
  const { name, label, value, error = null, onChange, ...other } = props;

  return (
    <div>
      <TextField
        variant="outlined"
        label={label}
        name={name}
        value={value}
        sx={textField}
        onChange={onChange}
        {...other}
        {...(error && { error: true, helperText: error })}
      />
    </div>
  );
}
