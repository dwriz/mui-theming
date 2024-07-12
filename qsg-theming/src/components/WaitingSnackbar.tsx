import { Snackbar, SnackbarContent, Box } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";

export default function WaitingSnackbar({ open }: { open: boolean }) {
  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <SnackbarContent
        sx={{
          backgroundColor: "#1C1C1E",
          border: "1px solid #38383E",
          color: "#A8A7AD",
        }}
        message={
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "1.5rem", fontWeight: "lighter" }}>
              Publishing
            </span>
            <ReplayIcon
              sx={{ color: "#A8A7AD", marginLeft: "15px", fontSize: "1.5rem" }}
            />
          </Box>
        }
      />
    </Snackbar>
  );
}
