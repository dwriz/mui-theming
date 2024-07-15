import { createTheme, Theme } from "@mui/material/styles";

const WaitingSnackbarTheme: Theme = createTheme({
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          border: "1px solid #38383E",
          backgroundColor: "#1C1C1E",
          color: "#A8A7AD",
          borderRadius: "4px",
          fontWeight: "lighter",
          alignItems: "center",
        },
        icon: {
          order: 1,
          marginLeft: "8px",
          marginRight: "2px",
          color: "#A8A7AD !important",
        },
      },
    },
  },
});

export default WaitingSnackbarTheme;
