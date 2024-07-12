import Button from "@mui/material/Button";

export default function DefaultButton({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} sx={{ bgcolor: "grey", color: "white" }}>
      DEFAULT
    </Button>
  );
}
