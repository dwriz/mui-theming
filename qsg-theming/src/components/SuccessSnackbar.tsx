import { Snackbar, SnackbarContent, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function SuccessSnackbar({ open }: { open: boolean }) {
  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <SnackbarContent
        sx={{
          backgroundColor: "#1C1C1E",
          border: "1px solid #256924",
          color: "#76B785",
        }}
        message={
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "1.5rem", fontWeight: "lighter" }}>
              Your site is published
            </span>
            <CheckCircleIcon
              sx={{ color: "#76B785", marginLeft: "15px", fontSize: "1.5rem" }}
            />
          </Box>
        }
      />
    </Snackbar>
  );
}
