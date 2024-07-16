import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import theme from "./libs/theme/theme";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Alert icon={<CheckCircleIcon />} severity="success">
          Your site is published
        </Alert>
        <Alert icon={<InfoIcon />} severity="info">
          Publishing
        </Alert>
        <Alert icon={<ErrorIcon />} severity="error">
          Your site failed to deploy
        </Alert>
      </Box>
    </ThemeProvider>
  );
}
