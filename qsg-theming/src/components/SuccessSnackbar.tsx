import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { ThemeProvider } from "@mui/material/styles";
import SuccessSnackbarTheme from "./SuccessSnackbarTheme";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SuccessSnackbar = ({ open }: { open: boolean }) => {
  return (
    <ThemeProvider theme={SuccessSnackbarTheme}>
      <Snackbar open={open}>
        <Alert icon={<CheckCircleIcon />}>Your site is published</Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default SuccessSnackbar;
