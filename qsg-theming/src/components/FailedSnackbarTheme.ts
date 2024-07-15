import { createTheme, Theme } from "@mui/material/styles";

const FailedSnackbarTheme: Theme = createTheme({
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          border: "1px solid #F65A80",
          backgroundColor: "#1C1C1E",
          color: "#FF94AE",
          borderRadius: "4px",
          fontWeight: "lighter",
          alignItems: "center",
        },
        icon: {
          order: 1,
          marginLeft: "8px",
          marginRight: "2px",
          color: "#FF94AE !important",
        },
      },
    },
  },
});

export default FailedSnackbarTheme;
