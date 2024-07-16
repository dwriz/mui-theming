import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => {
          const { severity } = ownerState;

          let styles = {
            border: "1px solid #256924",
            backgroundColor: "#1C1C1E",
            color: "#76B785",
            borderRadius: "4px",
            fontWeight: "lighter",
            alignItems: "center",
            width: "175px",
          };

          if (severity === "error") {
            styles = {
              ...styles,
              border: "1px solid #D32F2F",
              backgroundColor: "#FFEBEE",
              color: "#D32F2F",
              width: "300px",
            };
          } else if (severity === "warning") {
            styles = {
              ...styles,
              border: "1px solid #ED6C02",
              backgroundColor: "#FFF3E0",
              color: "#ED6C02",
            };
          } else if (severity === "info") {
            styles = {
              ...styles,
              border: "1px solid #0288D1",
              backgroundColor: "#E3F2FD",
              color: "#0288D1",
            };
          }

          return styles;
        },

        icon: ({ ownerState }) => {
          const { severity } = ownerState;

          let customIconStyles = {
            order: 1,
            marginLeft: "8px",
            marginRight: "2px",
            color: "#76B785 !important",
            "& svg": {
              fontSize: "1rem",
            },
          };

          if (severity === "error") {
            customIconStyles = {
              ...customIconStyles,
              color: "#D32F2F !important",
            };
          } else if (severity === "warning") {
            customIconStyles = {
              ...customIconStyles,
              color: "#ED6C02 !important",
            };
          } else if (severity === "info") {
            customIconStyles = {
              ...customIconStyles,
              color: "#0288D1 !important",
            };
          }

          return customIconStyles;
        },
      },
    },
  },
});

export default theme;
