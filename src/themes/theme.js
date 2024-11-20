import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6A1B9A",
    },
    secondary: {
      main: "#FFA726",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6A1B9A",
    },
    secondary: {
      main: "#FFA726",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});
