import Button from "@mui/material/Button";

export default function WaitingButton({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} sx={{ bgcolor: "orange", color: "white" }}>
      WAITING
    </Button>
  );
}
