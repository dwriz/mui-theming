import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { ThemeProvider } from "@mui/material/styles";
import WaitingSnackbarTheme from "./WaitingSnackbarTheme";
import ReplayIcon from "@mui/icons-material/Replay";

const WaitingSnackbar = ({ open }: { open: boolean }) => {
  return (
    <ThemeProvider theme={WaitingSnackbarTheme}>
      <Snackbar open={open}>
        <Alert icon={<ReplayIcon />}>Publishing</Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default WaitingSnackbar;
