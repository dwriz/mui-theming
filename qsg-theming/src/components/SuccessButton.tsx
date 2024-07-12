import Button from "@mui/material/Button";

export default function SuccessButton({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} sx={{ bgcolor: "green", color: "white" }}>
      SUCCESS
    </Button>
  );
}
