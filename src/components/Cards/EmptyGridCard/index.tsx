
import Card from "@mui/material/Card";

// to provide a grid system
export default () => {
  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        background: "inherit",
        color: "white",
        minHeight: "21vw",
        minWidth:"30vW"
      }}
    >
    </Card>
  );
}
