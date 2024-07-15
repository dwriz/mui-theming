import { createTheme, Theme } from "@mui/material/styles";

const SuccessSnackbarTheme: Theme = createTheme({
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          border: "1px solid #256924",
          backgroundColor: "#1C1C1E",
          color: "#76B785",
          borderRadius: "4px",
          fontWeight: "lighter",
          alignItems: "center",
        },
        icon: {
          order: 1,
          marginLeft: "8px",
          marginRight: "2px",
          color: "#76B785 !important",
        },
      },
    },
  },
});

export default SuccessSnackbarTheme;
