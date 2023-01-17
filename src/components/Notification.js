import { Alert, Snackbar } from "@mui/material";
import React from "react";

export default function Notification(props) {
  const { notify, setNotify } = props;
  const handleClose = (event, reason) => {
    setNotify({
      isOpen: false,
    });
  };

  return (
    <Snackbar
      sx={{ top: "72p" }}
      open={notify.isOpen}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={notify.type}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
}
