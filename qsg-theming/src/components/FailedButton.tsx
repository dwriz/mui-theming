import Button from "@mui/material/Button";

export default function FailedButton({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} sx={{ bgcolor: "red", color: "white" }}>
      FAILED
    </Button>
  );
}
