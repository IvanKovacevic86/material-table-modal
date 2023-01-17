import { Card, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function PageHeader(props) {
  const { title, subTitle, icon } = props;

  return (
    <Paper elevation={0} square sx={{ backgroundcolor: "#fdfdff" }}>
      <Box sx={{ padding: "32px", display: "flex", marginbottom: "16px" }}>
        <Card
          sx={{
            display: "inline-block",
            padding: "16px",
            color: "#3c44b1",
            borderRadius: "12px",
          }}
        >
          {icon}
        </Card>
        <Box sx={{ paddingLeft: "32px" }}>
          <Typography variant="h6" component="div">
            {" "}
            {title}
          </Typography>
          <Typography
            variant="subTitle2"
            component="div"
            sx={{ opacity: "0.6" }}
          >
            {" "}
            {subTitle}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
