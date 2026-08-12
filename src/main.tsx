import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./App";
import "./styles.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#5b8cff" },
    background: { default: "#070a12", paper: "#0e1320" },
    text: { primary: "#f5f7fb", secondary: "#9aa5b5" },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.055em" },
    h2: { fontWeight: 800, letterSpacing: "-0.04em" },
    h3: { fontWeight: 750, letterSpacing: "-0.025em" },
    button: { textTransform: "none", fontWeight: 700 },
  },
  shape: { borderRadius: 18 },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
