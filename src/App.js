import TeacherSignUpForm from './components/TeacherSignUpForm';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography, Switch } from "@mui/material";
import React, { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Define theme with light and dark modes
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#6A1B9A", // Purple
      },
      secondary: {
        main: "#FFA726", // Orange
      },
      background: {
        default: darkMode ? "#121212" : "#F5F5F5",
        paper: darkMode ? "#1E1E1E" : "#FFFFFF",
      },
    },
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <Box sx={{ position: "absolute", top: "16px", right: "16px" }}>
          <Typography variant="body2" sx={{ marginBottom: "4px" }}>
            Dark Mode
          </Typography>
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode((prev) => !prev)}
          />
        </Box>
        <TeacherSignUpForm />
      </Box>
    </ThemeProvider>
  );
};

export default App;