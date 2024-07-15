import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { ThemeProvider } from "@mui/material/styles";
import FailedSnackbarTheme from "./FailedSnackbarTheme";
import AnnouncementIcon from "@mui/icons-material/Announcement";

const FailedSnackbar = ({ open }: { open: boolean }) => {
  return (
    <ThemeProvider theme={FailedSnackbarTheme}>
      <Snackbar open={open}>
        <Alert icon={<AnnouncementIcon />}>Your site failed to deploy</Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default FailedSnackbar;
