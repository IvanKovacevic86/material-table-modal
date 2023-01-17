import "./App.css";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import Empoyees from "../pages/Employees/Empoyees";

const appMain = {
  paddingLeft: "320px",
  width: "100%",
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
    },
    background: {
      default: "#f4f5fd",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <Box sx={appMain}>
        <Header />

        <Empoyees />
      </Box>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
