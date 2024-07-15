import { useState } from "react";
import SuccessButton from "./components/SuccessButton";
import WaitingButton from "./components/WaitingButton";
import FailedButton from "./components/FailedButton";
import DefaultButton from "./components/DefaultButton";
import SuccessSnackbar from "./components/SuccessSnackbar";
import WaitingSnackbar from "./components/WaitingSnackbar";
import FailedSnackbar from "./components/FailedSnackbar";
import { Box, Typography } from "@mui/material";

export default function App() {
  const [status, setStatus] = useState("SUCCESS");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "white",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Status: {status}
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <SuccessButton onClick={() => setStatus("SUCCESS")} />
        <WaitingButton onClick={() => setStatus("WAITING")} />
        <FailedButton onClick={() => setStatus("FAILED")} />
        <DefaultButton onClick={() => setStatus("DEFAULT")} />
      </Box>
      <SuccessSnackbar open={status === "SUCCESS"} />
      <WaitingSnackbar open={status === "WAITING"} />
      <FailedSnackbar open={status === "FAILED"} />
    </Box>
  );
}
