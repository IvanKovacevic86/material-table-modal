import React from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField } from "@mui/material";

export default function BasicDatePicker(props) {
  const { name, label, value, onChange, renderInput } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        format="DD-MMM-YYYY"
        label={label}
        name={name}
        value={value}
        onChange={(date) => onChange(convertToDefEventPara(name, date))}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
