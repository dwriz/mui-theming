import { Snackbar, SnackbarContent, Box } from "@mui/material";
import AnnouncementIcon from "@mui/icons-material/Announcement";

export default function FailedSnackbar({ open }: { open: boolean }) {
  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <SnackbarContent
        sx={{
          backgroundColor: "#1C1C1E",
          border: "1px solid #F65A80",
          color: "#FF94AE",
          width: "310px",
        }}
        message={
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "1.5rem", fontWeight: "lighter" }}>
              Your site failed to deploy
            </span>
            <AnnouncementIcon
              sx={{ color: "#FF94AE", marginLeft: "15px", fontSize: "1.5rem" }}
            />
          </Box>
        }
      />
    </Snackbar>
  );
}
